import React, { createContext, useCallback, useReducer } from 'react'

export const OrderListContext = createContext({
  orderlist: [],
  AddnewOrder: () => { },
  addInitailOrder: () => { },
  DeletenewOrder: () => { }
});

const orderListReducer = (currOrders, action) => {

  let newOrders = currOrders;
  if (action.type === 'NEW_ORDER') {
    newOrders = [action.payload, ...currOrders];
  }
  else if (action.type === 'ADD_INITIAL_ORDERS') {
    newOrders = action.payload.orders;
  }
  else if (action.type === 'DELETE_ORDER') {
    newOrders = currOrders.filter(order => order.id !== action.payload.orderId)
  }
  return newOrders;
};



const OrderListContextProvider = ({ children }) => {

  const [orderlist, dispatchOrderList] = useReducer(orderListReducer, defaultOrders);

  const AddnewOrder = (CustName, delivDate, payMode, doorType) => {
    dispatchOrderList({
      type: 'NEW_ORDER',
      payload: {
        id: Date.now(),
        name: CustName,
        date: delivDate,
        mode: payMode,
        type: doorType
      }
    })

  }

  const DeletenewOrder = useCallback((orderId) => {

    dispatchOrderList({
      type: 'DELETE_ORDER',
      payload: {
        orderId,
      }
    })

    [dispatchOrderList]
  })

  const addInitailOrder = (orders) => {
    dispatchOrderList({
      type: 'ADD_INITIAL_ORDERS',
      payload: {
        orders
      },
    });
  }


  return (
    <OrderListContext.Provider value={
      { orderlist, AddnewOrder, DeletenewOrder, addInitailOrder }
    }>

      {children}

    </OrderListContext.Provider>
  )


}
export default OrderListContextProvider

export const defaultOrders = [{
  id: "1",
  CustName: 'Lokesh',
  delivDate: 'Today',
  payMode: 'Phonepay',
  doorType: 'Door',
},
{
  id: '2',
  CustName: 'Lokesh',
  delivDate: 'Today',
  payMode: 'Phonepay',
  doorType: 'Door',
}
]
