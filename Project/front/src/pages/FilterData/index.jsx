import React from 'react'
import Style from "./index.module.css"
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import ProductCard from "../../components/productCard/index"
import {mockData} from "../../assets/mockData"

const index = () => {

    const filterProducts= useSelector(state=>state.product.filteredData)
  return (
    <section className={Style.product}>
        <div className={Style.productTitle}>
          <h2><b>Shop</b></h2>
        <div className={Style.container}>
        <Row  className={Style.row}>
            {filterProducts.map(((product) => (
              <ProductCard product={product} />
            )))}
          </Row>
        </div>
        </div>

      </section>
  )
}

export default index