import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Calendar from 'react-calendar'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className ="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumbers />
      <Calendar />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
