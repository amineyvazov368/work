import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import Style from "./index.module.css"
import { FaHeadset } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const index = () => {
    const infoItem = [
        {
            icon: <FaShippingFast />,
            title: "Free Shipping",
            description: "Get your orders delivered with no extra cost"
        },
        {
            icon: <FaHeadset />,
            title: "Supports 24/7",
            description: "We are here to assist you anytime"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "100% Money Back",
            description: "Full refund if you are not satisfied"
        },
        {
            icon: <FaLock />,
            title: "Discount",
            description: "Enjoy the best prices on our products"
        }
    ]

    return (
      <div className={Style.info}>
          <div className={Style.container}>
            <Row className={Style.row}>
                {infoItem && infoItem.map((item, index)=>(
                     <Col md={3} sm={12} lg={3} key={index} className={Style.col}>
                        <span>{item.icon}</span>
                    <h5> {item.title}</h5>
                    <p>{item.description}</p>
                     </Col>
                ))}
            </Row>

        </div>
      </div>
    )
}

export default index