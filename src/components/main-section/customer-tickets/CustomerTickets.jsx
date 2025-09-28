import React from 'react'
import TicketCard from './customerTicketCard/TicketCard'

const CustomerTickets = () => {
    return (
        <div>
            <h2 className='mb-4 text-[#34485A] font-semibold text-2xl'>Customer Tickets</h2>
            <div className='grid grid-cols-2 gap-5'>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    )
}

export default CustomerTickets