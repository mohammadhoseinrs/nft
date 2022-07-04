import React, { useEffect, useState } from "react";
import HomeBanner from "../../components/home/Banner";
import TopPlayers from "../../components/home/TopPlayers";
import UiSlider from "../../components/uiSlider/UiSlider";
import Data from "../../components/data/Data";
import Flag from "../../components/flag/main";
import ModalGame from "../../components/home/ModalGame";
import { useSelector } from "react-redux";

export default function Home() {
  const {user}=useSelector(state=>state.login)
  console.log(user);
  const [openModal,setOpenModal]=useState(false)
  
  useEffect(()=>{
    if(user?.completeRegisterV1===false){
      setOpenModal(true)
    }else if(user?.completeRegisterV1===true){
      setOpenModal(false)
    }
  },[user])
  const [DataTopPlayer, setDataTopPlayer] = useState([
    {
      id: 2,
      themeId: 1,
      parentId: null,
      fullName: "Bernd Leno",
      position: "GK",
      age: 30,
      nationalityId1: 1,
      nationalityId2: null,
      quizMarketValue: 10.0,
      styleId: 5,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 3,
      themeId: 0,
      parentId: null,
      fullName: "Arthur Okonkwo",
      position: "GK",
      age: 20,
      nationalityId1: 1,
      nationalityId2: null,
      quizMarketValue: 1.0,
      styleId: 0,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 4,
      themeId: 1,
      parentId: null,
      fullName: "Ben White",
      position: "CB",
      age: 24,
      nationalityId1: 2,
      nationalityId2: null,
      quizMarketValue: 40.0,
      styleId: 4,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 5,
      themeId: 0,
      parentId: null,
      fullName: "Gabriel",
      position: "CB",
      age: 24,
      nationalityId1: 3,
      nationalityId2: null,
      quizMarketValue: 30.0,
      styleId: 6,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 6,
      themeId: 1,
      parentId: null,
      fullName: "Rob Holding",
      position: "CB",
      age: 26,
      nationalityId1: 2,
      nationalityId2: null,
      quizMarketValue: 10.0,
      styleId: 6,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 7,
      themeId: 0,
      parentId: null,
      fullName: "Kieran Tierney",
      position: "LB",
      age: 24,
      nationalityId1: 4,
      nationalityId2: null,
      quizMarketValue: 32.0,
      styleId: 8,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 8,
      themeId: 0,
      parentId: null,
      fullName: "Nuno Tavares",
      position: "LB",
      age: 22,
      nationalityId1: 5,
      nationalityId2: null,
      quizMarketValue: 13.0,
      styleId: 9,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 9,
      themeId: 0,
      parentId: null,
      fullName: "Takehiro Tomiyasu",
      position: "RB",
      age: 23,
      nationalityId1: 6,
      nationalityId2: null,
      quizMarketValue: 25.0,
      styleId: 10,
      teamId: 1,
      leagueId: 1,
    },
    {
      id: 10,
      themeId: 0,
      parentId: null,
      fullName: "Cédric Soares",
      position: "RB",
      age: 30,
      nationalityId1: 5,
      nationalityId2: null,
      quizMarketValue: 5.0,
      styleId: 1,
      teamId: 1,
      leagueId: 1,
    },
  ]);

  return (
    <div>
      {/* {alert(DataTopPlayer)} */}
      <HomeBanner setOpenModal={setOpenModal}/>

      <UiSlider>
        <React.Fragment>
          {DataTopPlayer.map((item) => (
            <TopPlayers
              id={item.id}
              fullName={item.fullName}
              age={item.age}
              nationalityId1={Flag(item.nationalityId1)}
              nationalityId2={!Flag(item.nationalityId2) ? null : ""}
              styleId={item.styleId}
              leagueId={item.leagueId}
              themeId={item.themeId}
              position={item.position}
            />
          ))}
        </React.Fragment>
      </UiSlider>
      {openModal && <ModalGame setOpenModal={setOpenModal} />}
    </div>
  );
}
