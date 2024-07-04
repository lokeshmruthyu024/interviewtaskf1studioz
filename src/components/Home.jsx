import React from 'react'
import { IoAddCircle } from 'react-icons/io5'
import { createBrowserRouter } from 'react-router-dom'
import CreateOrder1 from './Pages/CreateOrder1.jsx'

const Home = () => {
  const router = createBrowserRouter([
    {
      path: '/createOrder1',
      element: <CreateOrder1 />
    }, {}
  ])
  return (
    <div>
      <div className='AddNew'>
        <IoAddCircle className='AddNewMenu' router={router} />
      </div>
    </div>
  )
}

export default Home
