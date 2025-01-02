import React from 'react'

const Header = () => {
  return (
    <div> 
    <h1 className='text-3xl font-medium' >Good Morning, Mansi!</h1> 
    <div className = "flex items-end justify-evenly">
        <h2>Tasker</h2> 
        <h2>Overview</h2>
        <h2>Projects</h2>
        <h2>Team</h2>
        <h2>Calender</h2>
        <h2>Messages</h2>

        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'> Log Out </button>
    </div>
    </div>
  )
}

export default Header
