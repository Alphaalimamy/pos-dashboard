import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='flex flex-row bg-purple-200 h-screen m-screen overflow-hidden'>
            <div className='bg-purple-900'>
                <Sidebar/>
            </div>
            <div className="flex-1">
                <div className='bg-teal-100'>
                    <Header/>
                </div>
                <div><Outlet /></div>
            </div>
        </div>
    )
}

export default Layout