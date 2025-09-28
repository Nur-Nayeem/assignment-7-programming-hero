import React from 'react'

const StatusCard = () => {
    return (
        <div className='flex flex-col p-4 bg-white shadow-2xs'>
            <h3 className='mb-4 text-lg font-medium text-[#001931]'>Payment Failed - Card Declined</h3>
            <button className='py-3 bg-[#02A53B] text-white rounded-sm'>Complete</button>
        </div>
    )
}

export default StatusCard