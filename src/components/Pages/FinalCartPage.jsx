import React, { useContext, useRef } from 'react';

import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { OrderListContext } from '../Store/OrderListProvider'

const FinalCartPage = () => {

  const navigate = useNavigate();

  const custNameelement = useRef();
  const delivDateelement = useRef();
  const payModeelement = useRef();
  const doorTypeelement = useRef();

  const contextObj = useContext(OrderListContext);
  const onNewOrderList = contextObj.AddnewOrder;

  const Addorder = (event) => {
    event.preventDefault();
    const customerName = custNameelement.current.value;
    const deliveryDate = delivDateelement.current.value;
    const payMode = payModeelement.current.value;
    const doorType = doorTypeelement.current.value;

    custNameelement.current.value = "";
    delivDateelement.current.value = "";
    payModeelement.current.value = "";
    doorTypeelement.current.value = "";


    onNewOrderList(customerName, deliveryDate, payMode, doorType);

  }

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

        <div className='titleandcheckbox' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }}>

          <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }} onSubmit={Addorder}>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Enter Your Name*
              </label>
              <input type="text" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }} ref={custNameelement} />
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Enter Delivery Date*
              </label>
              <input type='date' style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }} ref={delivDateelement} />
            </div>
            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Enter PayMent Mode*
              </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }} ref={payModeelement}>
                <option value="">Cash On Delivery (30% Advance)</option>
                <option value="">Credit Card</option>
                <option value="">UPI Payment</option>
              </select>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'centre', width: '800px' }}>
              <label htmlFor="" style={{ width: '400px' }}>
                Select Category:      </label>
              <select name="" id="Assembly Type" style={{ marginLeft: '100px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px', paddingBottom: '5px', width: '400px' }} ref={doorTypeelement}>
                <option value="">Resedential Door</option>
              </select>
            </div>
            <Button onClick={() => navigate('/')} style={{ backgroundColor: 'brown', color: 'white', fontSize: '20px', position: 'fixed', width: '140px', bottom: '10px', left: '200px', height: '50px', fontWeight: 500, padding: '10px' }} >Home</Button>
            <button type='submit' style={{ backgroundColor: 'brown', color: 'white', fontSize: '20px', position: 'fixed', width: '140px', bottom: '10px', right: '200px', height: '50px', fontWeight: 500, padding: '10px' }} >Submit</button>
          </form>
        </div>
      </Box >

    </div>
  )
}

export default FinalCartPage
