import React from 'react'
import OrdersList from './Common/OrdersList';
import { OrderListData } from '@/Data/Ecommerce';

const AllOrders = () => {

  return (
    <>
      {OrderListData?.map((item, index) => (
        <OrdersList
          key={index}
          title={item.title}
          btnColor={item.buttonColor}
          btnText={item.buttonText}
        />
      ))}
    </>
  )
}

export default AllOrders
