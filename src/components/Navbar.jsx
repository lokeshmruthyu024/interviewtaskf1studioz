import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { IoMdNotifications } from 'react-icons/io'
import { HiQuestionMarkCircle } from 'react-icons/hi'


const Navbar = () => {
  return (
    <nav className='navbar Navbar'>
      <div className='container-fluid'>
        <img className='Logo' src="/images/logo.jpg" alt="" />
      </div>
      <div className='right-box'>
        <CgMenuGridR className='Menu-grid' />
        <IoMdNotifications className='Menu-grid1 RedDot' />
        <HiQuestionMarkCircle className='Menu-grid' />
        <img className='LokeshPic' src="/images/LokeshPict.jpg" alt="" />
      </div>
    </nav>
  )
}


export default Navbar
