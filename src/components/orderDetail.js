import React from 'react';

const OrderDetails = ({id,name,description,deadline}) => {

  return (
    <div id='order-details-wrapper' className='details-wrapper'>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{deadline}</p>
    </div>
  )
}

export default OrderDetails;
