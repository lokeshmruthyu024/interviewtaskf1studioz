import React from 'react'
import { IoAddCircle } from 'react-icons/io5'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import BasicTabs from './Pages/BasicTabs'
import HorizontalLinearStepper from './Pages/HorizontalLinearStepper'
// import { createOrderAction } from './Pages/HorizontalLinearStepper'

const Home = () => {
  const navigate = useNavigate();
  return (

    <div className='TabIndex'>
      <div className='TabularBox'>

        <BasicTabs />

      </div>

      <div className='AddNew'>
        <IoAddCircle className='AddNewMenu' onClick={() => navigate("/createorder")} />
      </div>

    </div>
  )
}

export default Home
