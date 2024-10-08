import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { mockData } from '../../assets/mockData'
import Style from "./index.module.css"
import { FaStar } from "react-icons/fa";
import Col from 'react-bootstrap/Col';


const index = () => {
  const { id } = useParams()
  const products = useSelector(state => state.product.products)
  const [product, setProduct] = useState(mockData);
  useEffect(() => {
    const newProduct = products.find(product => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id])
  return (
    <div className={Style.detail}>
      <Col md={9} className={Style.card}>
      <div className={Style.cardImg}> <img src={product.image} alt="" /></div>
      <div className={Style.cardInfo}>
        <h5>Name: {product.name}</h5>
        <p> Price: ${product.price}</p>
        <p>Info: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aperiam ad nulla omnis autem nisi vel, nostrum, odit inventore vitae repellat est dignissimos animi laborum? Itaque earum ratione nostrum corrupti!</p>
        <span className={Style.star}><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <div className={Style.back}>
          <Link to={'/shop'}>
          <button>Go Back</button>
          </Link>
        </div>

      </div>
    </Col></div>
  )
}

export default index