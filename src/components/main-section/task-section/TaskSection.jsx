import React from 'react'
import TaskResolved from './task-resolve/TaskResolve'
import TaskStatuses from './task-status/TaskStatuses'
import { toast } from 'react-toastify';


const TaskStatusSection = ({ taskStatus, setTaskStatus, resolves, setResolves, setAllTicket, allTicket }) => {
    const handleResolve = (task) => {
        const ispresent = resolves.find(tsk => tsk.id === task.id);
        if (!ispresent) {
            const filterdTaskStatuses = taskStatus.filter(tsk => tsk.id !== task.id)
            const filterdAllTickets = allTicket.filter(tsk => tsk.id !== task.id)
            setResolves([...resolves, task])
            setTaskStatus(filterdTaskStatuses);
            setAllTicket(filterdAllTickets);
            toast.success("Task Resolved Successfully!")
        }
        else {
            toast.error("Not Complated");
        }

    }
    console.log(resolves);

    return (
        <div className='flex-1/2 xl:flex-1/3 flex flex-col gap-10'>
            <TaskStatuses taskStatus={taskStatus} setTaskStatus={setTaskStatus} handleResolve={handleResolve} />
            <TaskResolved resolves={resolves} />
        </div>
    )
}

export default TaskStatusSection