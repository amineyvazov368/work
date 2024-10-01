import React, { useEffect } from 'react'
import Slider from "../../components/Slider/index"
import Row from 'react-bootstrap/Row';
import InfoSection from "../../components/InfoSection/index"
import Style from "./index.module.css"
import { setProducts } from "../../redux/productSlice"
import { useDispatch, useSelector } from 'react-redux'
import { mockData } from '../../assets/mockData'
import ProductCard from "../../components/productCard/index"
const index = () => {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  </style>
  const dispatch = useDispatch()
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])


  return (

    <div className={Style.home}>
      <Slider />
      <InfoSection />
      <section className={Style.product}>
        <div className={Style.productTitle}>
          <h2>Top Product</h2>
        <div className={Style.container}>
        <Row  className={Style.row}>
            {products.products.slice(0, 5).map(((product) => (
              <ProductCard product={product} />
            )))}
          </Row>
        </div>
        </div>

      </section>
    </div>
  )
}

export default index