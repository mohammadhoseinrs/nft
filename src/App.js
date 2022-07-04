import "./assets/css/app.css";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer";
import { ethers, providers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";
import WalletLink from "walletlink";
import api from "./api/api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./feature/loginSlice";

function App() {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [address, setAddress] = useState("");
  const [WalletDetail,setWalletDetail]=useState(null)
  const [chainId,setChainId]=useState('')
  const [networkId,setNetworkId]=useState('')
  const [provider,setProvider]=useState()
  const dispatch=useDispatch()
  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "1789229a9c4e48b684029cb4d13890f5",
        },
      },
      binancechainwallet: {
        package: true,
      },
      walletlink: {
        package: WalletLink,
        options: {
          appName: "Net2Dev NFT",
          infuraId: "1789229a9c4e48b684029cb4d13890f5",
          rpc: "",
          chainId: 4,
          appLogoUrl: null,
          darkMode: true,
        },
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
          },
          network: "binance",
          chainId: 56,
          infuraId: "1789229a9c4e48b684029cb4d13890f5",
        },
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "rinkeby",
      providerOptions,
      theme: "dark",
    });

    setWeb3Modal(newWeb3Modal);
  }, []);
 
  async function connectWallet() {
    const provider = await web3Modal.connect();
    const ethersProvider = new providers.Web3Provider(provider);
    const userAddress = await ethersProvider.getSigner().getAddress();
    const chainid = await ethersProvider.getSigner().getChainId();
    setProvider(provider)
    setChainId(chainid)
    if(chainid==56){
      setNetworkId(2)
    }else if(chainid==1){
      setNetworkId(1)
    }
    const networkid = await ethersProvider.getNetwork();
    setWalletDetail(ethersProvider.getSigner())
    setAddress(userAddress);
  }
  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);
  async function addListeners(web3ModalProvider) {
    web3ModalProvider.on("accountsChanged", (accounts) => {
      window.location.reload();
    });

    // Subscribe to chainId change
    web3ModalProvider.on("chainChanged", (chainId) => {
      window.location.reload();
    });
    web3ModalProvider.on('disconnect' ,(error)=>{
      console.log(error);
    })
  }
  


  useEffect(() => {
    if(WalletDetail){
      try{
        api.get(`api/auth/connect/${address}/${networkId}/${chainId}`).then(res=>{
          dispatch(loginSuccess(res.data))
          localStorage.setItem('userDetail',JSON.stringify(res.data))
        })
      }catch(err){
        console.log(err);
      }
      console.log('the user is sign in');
    }else{
      console.log('the user is not sign in')
      localStorage.removeItem('userDetail')
    }
  },[connectWallet]);


  

  const router = useRoutes(routes);
  const location = useLocation();
  return (
    <section className="app">
      {location.pathname.includes("/user") ? (
        ""
      ) : (
        <Header connectWallet={connectWallet} />
      )}
      {router}
      {location.pathname.includes("/user") ? "" : <Footer />}
    </section>
  );
}

export default App;
