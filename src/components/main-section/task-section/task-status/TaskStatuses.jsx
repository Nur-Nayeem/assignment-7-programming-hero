import React from 'react'
import StatusCard from './StatusCard';

const TaskStatuses = ({ taskStatus, handleResolve }) => {
    return (
        <div>
            <h2 className='mb-2 text-[#34485A] font-semibold text-2xl'>Task Status</h2>
            {
                taskStatus.length === 0 ?

                    <div>
                        <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                    </div>

                    :

                    <div className='flex flex-col gap-2.5'>
                        {
                            taskStatus.map(status => <StatusCard key={status.id} status={status} title={status.title} handleResolve={handleResolve} />)
                        }

                    </div>
            }

        </div>
    )
}

export default TaskStatuses