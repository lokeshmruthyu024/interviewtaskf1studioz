import React, { useContext } from 'react'
import ActiveCart from './ActiveCart'

import { OrderListContext as OrderListData } from '../Store/OrderListProvider.jsx';

import { defaultOrders } from '../Store/OrderListProvider.jsx';
const OrderList = () => {



  const { orderlist, addInitailOrder } = useContext(OrderListData);

  const ondeleteClick = contextObj.DeletenewOrder;
  return (
    <div>
      <div className='items-container'>
        {defaultOrders.map((order) => <ActiveCart
          key={order.id}
          order={order}
        />
        )}
      </div>
    </div >
  )
}
export default OrderList