import React from 'react'
import TicketCard from './customerTicketCard/TicketCard'

const CustomerTickets = ({ allTicket, taskStatus, setTaskStatus }) => {

    const handleTaskStatus = (task) => {
        const isAdded = taskStatus.find(tsk => tsk.id === task.id);
        if (!isAdded) {
            setTaskStatus([...taskStatus, task]);
        } else {
            alert("already added");
        }
    }


    console.log(taskStatus);

    return (
        <div>
            <h2 className='mb-4 text-[#34485A] font-semibold text-2xl'>Customer Tickets</h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                {
                    allTicket.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} handleTaskStatus={handleTaskStatus} />)
                }


            </div>
        </div>
    )
}

export default CustomerTickets