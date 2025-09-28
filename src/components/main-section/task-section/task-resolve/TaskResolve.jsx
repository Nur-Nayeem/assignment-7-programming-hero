import React from 'react'
import ResolvedCard from './ResolvedCard';

const TaskResolved = () => {
    let resolve = false;
    return (
        <div>
            <h2 className='mb-2 text-[#34485A] font-semibold text-2xl'>Resolved Task</h2>
            {
                resolve
                    ?
                    <div>
                        <p className='text-[#627382]'>No resolved tasks yet.</p>
                    </div>

                    :
                    <ResolvedCard />

            }

        </div>
    )
}

export default TaskResolved