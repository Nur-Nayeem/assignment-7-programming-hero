import React from 'react'

const StatusCard = ({ status, title, handleResolve, handleRemoveTickets }) => {
    return (
        <div className='flex flex-col p-4 bg-white shadow-2xs'>
            <h3 className='mb-4 text-lg font-medium text-[#001931]'>{title}</h3>
            <button className='py-3 bg-[#02A53B] text-white rounded-sm' onClick={() => {
                handleResolve(status);
            }} >Complete</button>
        </div>
    )
}

export default StatusCard