import React from 'react'

const ResolvedCard = ({ res }) => {
    return (
        <div className='py-5 px-4 bg-[#E0E7FF] rounded-sm shadow-2xs'>
            <h3 className='text-[#001931] text-lg font-medium'>{res.title}</h3>
        </div>
    )
}

export default ResolvedCard