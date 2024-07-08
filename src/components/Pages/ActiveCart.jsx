import React, { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai"
import { OrderListContext as OrderListData } from '../Store/OrderListProvider';

const ActiveCart = ({ order }) => {

  const contextObj = useContext(OrderListData);
  const ondeleteClick = contextObj.DeletenewOrder;

  return (
    <div className="container">

      <div className='kg-row row'>
        <div className='col-3' ></div>
        <div className='col-3'></div>
        <div className='col-2'></div>
        <div className='col-2'></div>

        <div className='col-2'>

          <button className='kg-button btn btn-danger'
            onClick={() => {
              ondeleteClick(order.id)
            }}
          >
            <AiFillDelete />
          </button>

        </div>
      </div >
    </div >
  )
}

export default ActiveCart
