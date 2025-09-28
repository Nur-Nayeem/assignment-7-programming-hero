import React from 'react'
import StatusCard from './StatusCard';

const TaskStatus = () => {
    let taskStatus = false;
    return (
        <div>
            <h2 className='mb-2 text-[#34485A] font-semibold text-2xl'>Task Status</h2>
            {
                taskStatus ?

                    <div>
                        <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                    </div>

                    :

                    <div>
                        <StatusCard />
                    </div>
            }

        </div>
    )
}

export default TaskStatus