import React, { useContext, useRef } from 'react'
import { Box, FormControl, Select } from '@mui/material'
import { Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const ThirdPage = () => {

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
        <div style={{ position: 'relative', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '5px', backgroundColor: 'grey', width: '100%' }}>Layout Options</div>

        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Assembly Type:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Complete Door</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                WindCode:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">WindCode W1</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Design:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">CC</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                WindCode:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Dark Finish</option>
              </select>
            </div>
          </form>
        </div>
      </Box >
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
        <div style={{ position: 'relative', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '5px', backgroundColor: 'grey', width: '100%' }}>Window Options</div>
        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Glass Type:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Solid (No Windows)</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Section(S) Glazed:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Section 4</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Framing:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Arch 1 Design</option>
              </select>
            </div>

          </form>
        </div>
      </Box >

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
        <div style={{ position: 'relative', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '5px', backgroundColor: 'grey', width: '100%' }}>Track Options</div>
        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Spring:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Galvanized Torsion</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Track Size:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">2" Flag & Jamb Bracket Loose</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Track Mount:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Bracket</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Track Radius:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">12" Radius</option>
              </select>
            </div>

          </form>
        </div>
      </Box >

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
        <div style={{ position: 'relative', paddingLeft: '10px', paddingBottom: '5px', paddingTop: '5px', backgroundColor: 'grey', width: '100%' }}>Track Options</div>
        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>
          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Lock:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">Inside Slide Lock (#2)</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Packaging:
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }}>
                <option value="">[x] Distributor</option>
              </select>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                MISC Lock Options:
              </label>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', marginRight: '60px' }}>
                <input type="radio" name="" id="" style={{ marginRight: '20px' }} />
                <label htmlFor="" style={{ marginLeft: '40px' }}>No Lock Hole</label>
              </div>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'centre', width: '800px', height: 'auto' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Additional Options:
              </label>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', marginRight: '60px', width: '400px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Extra Struts</label>
                  </div>
                  <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '320px' }}>
                    <option value="">5 Extra Stuffs</option>
                  </select>

                </div>
              </div>
              <div>

              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Extra Struts</label>
            </div>
            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Spade Strap Hinges</label>
            </div>

            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>14 GA Quite Hinges</label>
            </div>

            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Less bottom Astragal</label>
            </div>

            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Gold Bar Gurantee ( Select Dealers )</label>
            </div>
            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Medallion Hardware Upgrade</label>
            </div>
            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Light Seal Kit</label>
            </div>

            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>Side Lock Mounted at 54"</label>
            </div>
            <div style={{ display: 'flex', marginTop: '30px', marginLeft: '260px', flexDirection: 'row', width: '400px' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '40px', width: '20px' }} />
              <label htmlFor="" style={{ marginLeft: '40px' }}>2 Spear Lift Handles</label>
            </div>
          </form>
        </div>
      </Box >

    </div >
  )
}

export default ThirdPage
