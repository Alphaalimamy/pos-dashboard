import React from 'react'
import classNames from "classnames"
import * as FcIcons from "react-icons/fc"
import * as HiIcons from "react-icons/hi"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DashboardLinks, NavLinks } from '../navigations'

const linkClasses = 'flex item-center gap-2 font-light px-3 py-2 hover:bg-purple-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex w-50 h-screen flex-col text-white p-3 sidebar-container '>
            <div className='flex items-center gap-2 px-2 py-3 cursor-pointer sidebar'  onClick={() => navigate("/")}>
                <FcIcons.FcBullish fontSize={24} />
                <span className='text-purple-200 text-lg'>Open POS</span>
            </div>

            <div className='flex-1 py-8 flex flex-col gap-0.5 sidebar'>
                {NavLinks.map(item => <SideBarLink key={item.key} item={item} />)}
            </div>

            <div className='flex flex-col gap-0.5 border-t border-purple-700 sidebar'>
                {DashboardLinks.map(item => (
                    <SideBarLink key={item.key} item={item} />
                ))}


                <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
                    <span className='text-xl'> <HiIcons.HiOutlineLogout /> </span> Logout
                </div>

            </div>
        </div>
    )
}

function SideBarLink({ item }) {
    const { pathname } = useLocation()
    return (<Link to={item.path} className={classNames(pathname === item.path ? "text-purple-200 bg-purple-600" : "text-purple-400 text-xl" , linkClasses)}>
        {item.icon}  <span className=''>{item.lable}</span>
    </Link>)
}

export default Sidebar