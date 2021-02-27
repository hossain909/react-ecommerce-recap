import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  // console.log(props)
  const {name,img,seller,price,stock} = props.product
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt=""/>
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <p>by:{seller}</p>
        <p>${price}</p>
        <p>Only {stock} left in stock - Order soon</p>
        <button 
        className="button"
        onClick={()=>props.handleAddToCart(props.product)}
        ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
      </div>
    </div>
  );
};

export default Product;