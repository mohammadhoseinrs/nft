import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../../components/user/UserHeader'
import UserMain from '../../components/user/UserMain'
import './../../assets/css/user/user.css'
export default function User() {
  return (
    <section className='userpanel'>
        <div className="userpanel__main">
        <UserHeader />
        <UserMain />
        </div>
        <div className="user__outlet">
            <Outlet />
        </div>
    </section>
  )
}
