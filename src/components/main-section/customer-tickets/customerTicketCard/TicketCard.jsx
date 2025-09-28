import React from 'react'
import calender from '../../../../assets/calender.png'

const TicketCard = () => {
    return (
        <div className='bg-white p-4 shadow-md rounded-sm'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium text-[#001931]'>Login Issues - Can't Access Account</h3>
                <button className='bg-[#B9F8CF] px-3 py-1 flex items-center rounded-full text-[#0B5E06]'><div className='w-[16px] h-[16px] bg-[#02A53B] rounded-full mr-1.5'></div> Open</button>
            </div>
            <p className='mt-2 mb-4 text-[#627382]'>Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3.5'>
                    <span className='text-[#627382]'>#1002</span>
                    <span>HIGH PRIORITY</span>
                </div>
                <div className='flex gap-3.5'>
                    <span className='text-[#627382]'>Sarah Johnson</span>
                    <div className='flex gap-2.5'>
                        <figure>
                            <img src={calender} alt="" />
                        </figure>
                        <span className='text-[#627382]'>1/16/2024</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TicketCard