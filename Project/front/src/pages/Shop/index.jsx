import React from 'react'
import ProductCard from "../../components/productCard/index"
import { useSelector } from 'react-redux'
import Style from "./index.module.css"
import Row from 'react-bootstrap/Row';
const index = () => {
    const products= useSelector(state => state.product)
  return (
    <>
    <section className={Style.product}>
        <div className={Style.productTitle}>
          <h2><b>Shop</b></h2>
        <div className={Style.container}>
        <Row  className={Style.row}>
            {products.products.map(((product) => (
              <ProductCard product={product} />
            )))}
          </Row>
        </div>
        </div>

      </section>
    </>
  )
}

export default index