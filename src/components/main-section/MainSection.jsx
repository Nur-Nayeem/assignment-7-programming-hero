import React from 'react'
import CustomerTickets from './customer-tickets/CustomerTickets'
import TaskStatusSection from './task-section/TaskSection'

const MainSection = () => {
    return (
        <div className='container mx-auto flex gap-8'>
            <CustomerTickets />
            <TaskStatusSection />
        </div>
    )
}

export default MainSection