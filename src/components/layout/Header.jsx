import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/layout/header.css";
import logo from "./../../assets/img/logo/logo-bit.png";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import profile from "./../../assets/img/about/avatar.jpeg";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
export default function Header({ connectWallet ,disconnect }) {
  const { user } = useSelector((state) => state.login);
  console.log(user);
  return (
    <nav className="navbar">
      <section className="navbar__left">
        <div className="navbar__left__img">
          <img src={logo} alt="logo" />
        </div>
      </section>
      <section className="navbar__middle">
        <form className="navbar__middle__form">
          <div className="navbar__left__form">
            <input type="text" placeholder="Search" />
            <div className="navbar__middle__icon">
              <FiSearch />
            </div>
          </div>
        </form>
        <ul className="navbar__middle__item">
          <li>
            <Link to="/">Home</Link>
            <MdKeyboardArrowDown />
          </li>
          <li>
            <Link to="/marketplace/players">Marketplace</Link>
            <MdKeyboardArrowDown />
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </section>

      <section className="navbar__right">
        <div className="navbar__right__container">
          {user?.token ? (
            <>
              <div className="navbar__right__container__profile">
                <Link to="/user/dashboard">
                  <img src={profile} alt="" />
                </Link>
                <div className="wallet__dropdown tp__wallet__dropdown">
                  <div className="wallet__dropdown__id">
                    <h5>Wallet :</h5>
                    <p>
                    0xF74d ... 12hf204 
                    </p>
                  </div>
                  <div className="wallet__dropdown__balance">
                    <p>
                    Balance : 
                    <span>0.075ETH</span>
                    </p>
                  </div>
                  <div className="wallet__dropdown__action">
                    <ul>
                      <li>
                        <Link to="/user">
                          <FaUser />
                          <p>Profile</p>
                        </Link>
                      </li>
                      <li></li>
                      <li>
                        <div className="wallet__dropdown__action__link" onClick={disconnect}>
                          <FiLogOut />
                          <p>Log Out</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="navbar__right__login" onClick={connectWallet}>
                login
              </div>
            </>
          )}
        </div>
      </section>
    </nav>
  );
}
