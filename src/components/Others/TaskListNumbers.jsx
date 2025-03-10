import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className=' text-3xl font-semibold'>  0</h2>
            <h3 className='text-xl font-medium'>Priority Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-300'>
            <h2 className=' text-3xl font-semibold'>  0</h2>
            <h3 className='text-xl font-medium'>Upcoming Task</h3>
        </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className=' text-3xl font-semibold'>  0</h2>
            <h3 className='text-xl font-medium'>Pending Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-300'>
            <h2 className=' text-3xl font-semibold'>  0</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
