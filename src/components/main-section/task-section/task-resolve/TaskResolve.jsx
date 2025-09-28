import React from 'react'
import ResolvedCard from './ResolvedCard';

const TaskResolved = ({ resolves }) => {
    return (
        <div>
            <h2 className='mb-2 text-[#34485A] font-semibold text-2xl'>Resolved Task</h2>
            {
                resolves.length === 0
                    ?
                    <div >
                        <p className='text-[#627382]'>No resolved tasks yet.</p>
                    </div>

                    :
                    <div className='flex flex-col gap-2.5'>
                        {
                            resolves.map(res => <ResolvedCard key={res.id} res={res} />)
                        }
                    </div>



            }

        </div>
    )
}

export default TaskResolved