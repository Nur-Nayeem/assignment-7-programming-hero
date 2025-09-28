import React, { useState } from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm py-4">
            <div className='container mx-auto flex justify-between items-center'>
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <h2 className='font-bold text-lg lg:text-2xl'>CS — Ticket System</h2>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1 lg:text-lg">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <button className='cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded-sm font-semibold text-white'>+ New Ticket</button>
                </div>
                <div className="md:hidden">
                    <button className='cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-1 px-4 rounded-sm text-white text-2xl'>+</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

