import React, { useState } from 'react'
import ProductCard from "../../components/productCard/index"
import { useSelector } from 'react-redux'
import Style from "./index.module.css"
import Row from 'react-bootstrap/Row';
import { MdChildCare } from "react-icons/md";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import {mockData} from "../../assets/mockData"
const index = () => {
    const products= useSelector(state => state.product)
    const [data, setData]=useState(mockData)
    const filterResult=(catItem)=>{
      const result =mockData.filter((curData)=>{
        return( curData.category===catItem)
      })
      setData(result)
    }
  return (
    <>
    <section className={Style.product}>
        <div className={Style.productTitle}>
          <h2><b>Shop</b></h2>
          <div className={Style.category}>
            <div className={Style.cat} onClick={()=>setData(mockData)} ><span>All</span></div>
            <div className={Style.cat} onClick={()=>filterResult("men")}><FaMale  className={Style.icons} /></div>
            <div className={Style.cat} onClick={()=>filterResult("women")}><FaFemale className={Style.icons} /></div>
            <div className={Style.cat} onClick={()=>filterResult("children")}><MdChildCare className={Style.icons} /></div>
            <div className={Style.cat} onClick={()=>filterResult("smart")}><SiSmartthings className={Style.icons} /></div>
          </div>
        <div className={Style.container}>
        <Row  className={Style.row}>
            {data.map(((product) => (
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