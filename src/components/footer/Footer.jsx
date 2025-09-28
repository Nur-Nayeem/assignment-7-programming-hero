import React from 'react'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import linkdin from '../../assets/linkdin.png'
import mail from '../../assets/mail.png'
const Footer = () => {
    return (
        <div className='mt-20  bg-black text-white'>
            <div className='container mx-auto px-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-20'>
                <div className='max-w-[350px]'>
                    <h3 className='text-2xl font-bold mb-4'>CS — Ticket System</h3>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <ul className='flex flex-col gap-4'>
                    <h4 className='text-xl font-medium'>Company</h4>
                    <li className='text-[#A1A1AA]'><a href="">About Us</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Our Mission</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Contact Saled</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <h4 className='text-xl font-medium'>Services</h4>
                    <li className='text-[#A1A1AA]'><a href="">Products & Services</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Customer Stories</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Download Apps</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <h4 className='text-xl font-medium'>Information</h4>
                    <li className='text-[#A1A1AA]'><a href="">Privacy Policy</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Terms & Conditions</a></li>
                    <li className='text-[#A1A1AA]'><a href="">Join Us</a></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <h4 className='text-xl font-medium'>Social Links</h4>
                    <li className='flex items-center gap-2.5'><img src={twitter} alt="" /><a href="">@CS — Ticket System</a></li>
                    <li className='flex items-center gap-2.5'> <img src={linkdin} alt="" /><a href="">@CS — Ticket System</a></li>

                    <li className='flex items-center gap-2.5'> <img src={facebook} alt="" /><a href="">@CS — Ticket System</a></li>
                    <li className='flex items-center gap-2.5'><img src={mail} alt="" /><a href="">support@cst.com</a></li>
                </ul>
            </div>
            <p className='text-center py-5'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    )
}

export default Footer