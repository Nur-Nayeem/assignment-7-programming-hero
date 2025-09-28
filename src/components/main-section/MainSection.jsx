import React, { use, useEffect, useState } from 'react'
import CustomerTickets from './customer-tickets/CustomerTickets'
import TaskStatusSection from './task-section/TaskSection'

const MainSection = ({ fetchCustomerTickets, taskStatus, setTaskStatus, resolves, setResolves }) => {
    const fetchedTickets = use(fetchCustomerTickets)
    const [allTicket, setAllTicket] = useState(fetchedTickets)

    return (
        <div className='container mx-auto px-2.5 flex flex-col md:flex-row gap-8'>
            <CustomerTickets allTicket={allTicket} taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
            <TaskStatusSection taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolves={resolves} setResolves={setResolves} allTicket={allTicket} setAllTicket={setAllTicket} />
        </div>
    )
}

export default MainSection