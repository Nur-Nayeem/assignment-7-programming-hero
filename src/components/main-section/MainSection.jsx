import React from 'react'
import CustomerTickets from './customer-tickets/CustomerTickets'
import TaskStatusSection from './task-status-section/TaskStatusSection'

const MainSection = () => {
    return (
        <div className='container mx-auto flex'>
            <CustomerTickets />
            <TaskStatusSection />
        </div>
    )
}

export default MainSection