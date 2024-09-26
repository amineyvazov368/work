import React from 'react'
import Style from "./index.module.css"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const index = () => {
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
                <Link className={Style.link} to="/Cart">
                <FaShoppingCart className={Style.card} /> </Link>
                <button>
                    Login | Register
                </button>
                <button>
                <FaUser className={Style.user} />

                </button>
            </div>
        </div>


        <div className={Style.two}>
        <ul className={Style.lists}>
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default index