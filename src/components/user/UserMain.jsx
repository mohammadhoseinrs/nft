import React from "react";
import logo from './../../assets/img/about/logo-bit.png'
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserCircle, FaUsers, FaTicketAlt } from "react-icons/fa";
import { ImImage } from "react-icons/im";
import {SiSpringsecurity} from 'react-icons/si'
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import {
  AiTwotoneShopping,
  AiTwotoneCalendar,
  AiOutlineTransaction,
} from "react-icons/ai";
import './../../assets/css/user/userMain.css'
export default function UserMain() {
  return (
    <div className="usermain">
      <div className="usermain__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="usermain__menu">
        <ul>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <MdDashboard />
              </span>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <FaUserCircle />
              </span>
              <span className="nav-text">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <ImImage />
              </span>
              <span className="nav-text">Assets</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <AiTwotoneShopping />
              </span>
              <span className="nav-text">Order</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <AiTwotoneCalendar />
              </span>
              <span className="nav-text">OrderHistory</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <AiOutlineTransaction />
              </span>
              <span className="nav-text">Transaction</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <GiPayMoney />
              </span>
              <span className="nav-text">Deposit</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <GiReceiveMoney />
              </span>
              <span className="nav-text">Withdraw</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <FaTicketAlt />
              </span>
              <span className="nav-text">Ticket</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <FaUsers />
              </span>
              <span className="nav-text">Referral</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <SiSpringsecurity />
              </span>
              <span className="nav-text">Security</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <span className="nav-icon">
                <BiLogOut />
              </span>
              <span className="nav-text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
