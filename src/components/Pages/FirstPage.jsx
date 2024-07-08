import React from 'react'
import { Box, FormControl, Select } from '@mui/material'
import { Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const FirstPage = ({ handleClick }) => {
  const navigate = useNavigate();
  return (
    <div className='ToMakeItCentre'>
      <Box
        sx={{
          boxShadow: 3,
          width: '100%',
          height: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: 'black',
          // p: 1,
          // m: 1,
          paddingBottom: '20px',
          borderRadius: 1,
          textAlign: 'left',
          fontSize: '15px',
          fontWeight: '500',
          marginTop: '30px'
        }}

      >

        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'centre', alignItems: 'center' }}>
          <div className='ContainerBox' onClick={handleClick}>
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'centre' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>
                Configure your door from scratch
              </span> <span style={{ fontSize: '15px', color: 'grey' }}>
                Residential, Commercial, Entry Doors
              </span>
            </div>
            <div>
              <MdKeyboardArrowRight className='KeyBox' /></div>
          </div>
          <div className='ContainerBox' >
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'centre' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>
                Parts / Openers
              </span> <span style={{ fontSize: '15px', color: 'grey' }}>
                Order Parts and Openers
              </span>
            </div>
            <div>
              <MdKeyboardArrowRight className='KeyBox' /></div>
          </div>
          <div className='ContainerBox'>
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'centre' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>
                Direct Item Entry
              </span> <span style={{ fontSize: '15px', color: 'grey' }}>
                Other parts / Openers using a Product ID
              </span>
            </div>
            <div>
              <MdKeyboardArrowRight className='KeyBox' /></div>
          </div>
          <div className='ContainerBox'>
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'centre' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>
                Choose from your favorites
              </span> <span style={{ fontSize: '15px', color: 'grey' }}>
                Re-order door from your favorites
              </span>
            </div>
            <div>
              <MdKeyboardArrowRight className='KeyBox' /></div>
          </div>
        </div>
        <Button onClick={() => navigate('/')} style={{ backgroundColor: 'brown', color: 'white', fontSize: '20px', position: 'fixed', width: '140px', bottom: '10px', left: '200px', height: '50px', fontWeight: 500, padding: '10px' }} >Home</Button>
      </Box >
    </div>
  )
}

export default FirstPage
