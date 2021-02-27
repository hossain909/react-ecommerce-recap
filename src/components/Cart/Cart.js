import React from 'react';

const Cart = (props) => {
  console.log(props)
  const cart = props.cart
  return (
    <div>
     <h2>This is a cart </h2>
     <h2>Items Ordered:{cart.length}</h2>
    </div>
  );
};

export default Cart;