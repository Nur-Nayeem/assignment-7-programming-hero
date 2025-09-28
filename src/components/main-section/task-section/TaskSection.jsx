import React from 'react'
import TaskStatus from './task-status/TaskStatus'
import TaskResolved from './task-resolve/TaskResolve'

const TaskStatusSection = () => {
    return (
        <div className='flex-1/2 xl:flex-1/3 flex flex-col gap-10'>
            <TaskStatus />
            <TaskResolved />
        </div>
    )
}

export default TaskStatusSection