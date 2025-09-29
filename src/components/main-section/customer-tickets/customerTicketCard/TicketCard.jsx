import React from 'react'
import calender from '../../../../assets/calender.png'

const TicketCard = ({ ticket, handleTaskStatus }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    return (
        <div onClick={() => handleTaskStatus(ticket)} className='cursor-pointer bg-white p-4 shadow-md rounded-sm'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium text-[#001931]'>{title}</h3>
                <button className={`${status === 'open' ? 'bg-[#B9F8CF] text-[#0B5E06] ' : 'bg-[#F8F3B9] text-[#9C7700] '}  px-3 py-1 flex items-center rounded-full `}><div className={`w-[16px] h-[16px] ${status === 'open' ? 'bg-[#02A53B] ' : 'bg-[#FEBB0C] '}  rounded-full mr-1.5`}></div> {status}</button>
            </div>
            <p className='mt-2 mb-4 text-[#627382]'>{description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2.5 text-sm'>
                    <span className='text-[#627382]'>#{id}</span>
                    <span className={`${priority === 'medium' ? 'text-[#FEBB0C] ' : priority === 'high' ? 'text-[#F83044] ' : 'text-[#02A53B] '}`} >{priority.toUpperCase()} PRIORITY</span>
                </div>
                <div className='flex flex-col sm:flex-row gap-2.5 text-sm'>
                    <span className='text-[#627382] text-[16px] sm:text-sm'>{customer}</span>
                    <div className='flex gap-1.5'>
                        <figure className='w-6 h-6'>
                            <img className='w-full h-full' src={calender} alt="" />
                        </figure>
                        <span className='text-[#627382]'>{createdAt.replaceAll("-", "/")}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TicketCard