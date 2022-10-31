import React, { Fragment } from 'react'
import classNames from "classnames"
import { Popover, Transition, Menu } from "@headlessui/react"
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    const navigate = useNavigate()


    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center  border-b border-gray-200'>
            <div className='relative '>
                <HiOutlineSearch fontSize={20} className="absolute text-gray-400 top-1/2 -translate-y-1/2 px-1" />
                <input type="text" placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-30 w-[24rem] border-gray-700 rounded-sm bg-purple-100 py-2 px-5 pl-11 search' />
            </div>

            <div className='flex items-center gap-2 mr-2 left-search'>
                <Popover className="relative">
                    {({ open }) => (

                        <>
                            <Popover.Button className={classNames(open && "bg-purple-300 rounded-sm", "p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-400 focus:outline-none active:bg-gray-500")} >
                                <HiOutlineChatAlt fontSize={24} className="icon"/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-80">
                                    <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Messages</strong>

                                        <div className='mt-2 text-sm'>
                                            You have 2 messages
                                        </div>
                                    </div>
                                </Popover.Panel>

                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (

                        <>
                            <Popover.Button className={classNames(open && "bg-purple-300 rounded-sm", "p-1.5 inline-flex items-center text-rose-700 hover:text-opacity-400 focus:outline-none active:bg-gray-500")} >
                                <HiOutlineBell fontSize={24}  className="icon"/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 mt-2.5 z-10 w-80">
                                    <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-gray-700 font-medium'>Notifications</strong>

                                        <div className='mt-2 text-sm'>
                                            You have 2 messages
                                        </div>
                                    </div>
                                </Popover.Panel>

                            </Transition>
                        </>
                    )}
                </Popover>


                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <span className='sr-only'>Open user menu</span>
                            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: "./alpha.jpg" }}>
                                <span className='sr-only'>Alpha</span>
                            </div>
                        </Menu.Button>
                    </div>


                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 w-48 rounded-md p-1 ring-1 ring-opacity-5 bg-white focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && "bg-purple-600 text-purple-100 rounded-md",'text-purple-500 focus:bg-purple-600 block cursor-pointer p-2  border-b-2 menu-item')} onClick={() => navigate("/profile")}>
                                            Your Profile
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && "bg-purple-600 text-purple-100 rounded-md",'text-purple-500 focus:bg-purple-600 block cursor-pointer p-2 border-b-2 menu-item')} onClick={() => navigate("/setting")}>
                                            Settings
                                        </div>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={classNames(active && "bg-purple-600 text-purple-100 rounded-md",'text-purple-500 focus:bg-purple-600 block cursor-pointer p-2 border-b-2 menu-item')}  onClick={() => navigate("/")}>
                                            Signout
                                        </div>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header