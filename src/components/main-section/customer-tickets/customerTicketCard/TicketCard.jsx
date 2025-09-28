import React from 'react'
import calender from '../../../../assets/calender.png'

const TicketCard = ({ ticket, handleTaskStatus }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    return (
        <div onClick={() => handleTaskStatus(ticket)} className='cursor-pointer bg-white p-4 shadow-md rounded-sm'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium text-[#001931]'>{title}</h3>
                <button className='bg-[#B9F8CF] px-3 py-1 flex items-center rounded-full text-[#0B5E06]'><div className='w-[16px] h-[16px] bg-[#02A53B] rounded-full mr-1.5'></div> {status}</button>
            </div>
            <p className='mt-2 mb-4 text-[#627382]'>{description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3.5'>
                    <span className='text-[#627382]'>#{id}</span>
                    <span>{priority.toUpperCase()} PRIORITY</span>
                </div>
                <div className='flex gap-3.5'>
                    <span className='text-[#627382]'>{customer}</span>
                    <div className='flex gap-2.5'>
                        <figure>
                            <img src={calender} alt="" />
                        </figure>
                        <span className='text-[#627382]'>{createdAt}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TicketCard