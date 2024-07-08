import React, { useContext, useRef } from 'react'
import { Box, FormControl, Select } from '@mui/material'
import { Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const SecondPage = () => {



  return (
    <div className='ToMakeItCentre' >
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

        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }} >
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Select Category:      </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }} >
                <option value="">Resedential Door</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Select Series:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Canyonn Ridge Collection</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Door Type:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">CAN212</option>
              </select>
            </div>

          </form>
        </div>
      </Box >
    </div>
  )
}

export default SecondPage
