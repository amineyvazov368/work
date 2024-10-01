import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Style from "./index.module.css"
import { FaTrash } from "react-icons/fa";

const index = () => {
  
    const cart = useSelector(state => state.cart)
    const [address, setAddress]= useState("main stret, 0012")
    return (
        
        <div>
            {cart.products.length > 0 ?

                <div className={Style.full}>
                    <h3>Shopping Cart</h3>
                    <br />
                    <div className={Style.flex}>
                    <table >
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                            
                        </tr>
                        {cart.products.map((product)=>(
                            <tr>
                            <td className={Style.picture}><img src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button>-</button>
                                {product.quantity}
                                <button>+</button>
                            </td>
                            <td>${(product.quantity *product.price).toFixed(2)}
                            <button className={Style.trash} ><FaTrash /></button>
                            </td>
                        </tr>
                        ))}
                        
                        
                    </table>
                    <div className={Style.total}>
                        <h3>Cart Total</h3>
                        <div className={Style.item}>
                            <span>TOTAL ITEM : </span>
                            <span>{cart.totalQuantity}</span>
                        </div>
                        <hr />
                        <div>
                            <p>Shipping: </p>
                            <span>shipping to:</span>
                            <span><b>{address} </b></span> <br />
                            <a href="">change address </a>
                        </div>
                        <hr />
                        <div className={Style.price}>
                            <span> <b className={Style.bold}> Total Price: </b></span>
                            <span>${cart.totalPrice.toFixed(2)}</span>
                        </div> <br />
                        <button className={Style.proced}>Proced to checkout</button>
                    </div>
                    </div>
                </div>
                : <div className={Style.empty}>
                    <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                </div>

            }



        </div>
    )
}

export default index