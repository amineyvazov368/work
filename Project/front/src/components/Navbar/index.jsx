import React from 'react'
import Style from "./index.module.css"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
const index = () => {
    const products = useSelector(state => state.cart.products)
  return (
    <nav>
        <div className={Style.main}>
        <div className={Style.one} >
            <div className={Style.logo}><b><Link className={Style.log} to="/">e-Shop</Link></b></div>
            <div className={Style.search} >
                <form  >
                <input type="text" placeholder='product name' />
                <FaSearch  className={Style.icon}/>
                </form>
            </div>
            <div className={Style.right}>
                <Link className={Style.link} to="/cart">
                <FaShoppingCart className={Style.card} />
                {products.length > 0 && (
                    <span>{products.length}</span>
                )}
                 </Link>
                <button>
                    Login | Register
                </button>
                <button>
                <FaUser className={Style.user} />

                </button>
            </div>
        </div>


        <div className={Style.two}>
        <div className={Style.lists}>
            <Link className={Style.lin}  to="/">Home</Link>
            <Link className={Style.lin} to="/shop">Shop</Link>
            <Link className={Style.lin} to="/">About</Link>
            <Link className={Style.lin} to="/">Contact</Link>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default index