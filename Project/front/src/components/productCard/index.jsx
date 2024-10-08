import React from 'react'
import Col from 'react-bootstrap/Col';
import Style from "./index.module.css"
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {  useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
const index = ({product}) => {
    const dispatch = useDispatch()
    const handleAddToCart = (e,product) =>{
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
        alert("Product Added Succesfully")
    }
  return (
    <>
    <Col md={2}  sm={12}  lg={2} className={Style.card}>
    <Link to={`/product/${product.id}`} className={Style.link}>
   <div className={Style.cardImg}> <img src={product.image} alt="" /></div>
    <div className={Style.cardInfo}>
    <h5>{product.name}</h5>
    <p>${product.price}</p>
      <span className={Style.star}><FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </span>
       
       <div className={Style.hold} 
       onClick={(e) => handleAddToCart(e, product)}>
       <span className={Style.plus}> <b><FaPlus /></b></span>
        <span className={Style.add}>Add to cart</span>
       </div>
    
    </div>
    </Link>
    </Col>
    </>
  )
}

export default index