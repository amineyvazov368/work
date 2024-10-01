import React, { useState } from 'react'
import Style from "./index.module.css"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
const index = () => {
  const contents = [
    {
      title: "Watches for daily use",
      image: "https://c4.wallpaperflare.com/wallpaper/437/823/622/clock-detail-jewelry-luxury-wallpaper-preview.jpg",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus quaerat hic soluta asperiores dicta temporibus eum sed dolor, deleniti omnis dolorem assumenda reprehenderit a harum laboriosam, aspernatur modi autem blanditiis ex nam explicabo nisi? Quo provident ipsa delectus harum?",
      backgroundColor:"#fa8072"
    },
    {
      title: "Watches for Men",
      image: "https://m.media-amazon.com/images/I/71wDI6K5B8L._AC_UY1000_.jpg",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus quaerat hic soluta asperiores dicta temporibus eum sed dolor, deleniti omnis dolorem assumenda reprehenderit a harum laboriosam, aspernatur modi autem blanditiis ex nam explicabo nisi? Quo provident ipsa delectus harum?",
      backgroundColor:"#0b7ef3"
    },
    {
      title: "Watches for Women",
      image: "https://media.istockphoto.com/id/1137734425/photo/classic-women-gold-watch-white-dial-brown-leather-strap-isolate-white-background.jpg?s=612x612&w=0&k=20&c=hjht4Cze-M3_2D4HbgR_YbWXp-mbxvg4Pw4MOyOLZ0g=",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus quaerat hic soluta asperiores dicta temporibus eum sed dolor, deleniti omnis dolorem assumenda reprehenderit a harum laboriosam, aspernatur modi autem blanditiis ex nam explicabo nisi? Quo provident ipsa delectus harum?",
      backgroundColor:"#ff10f0"
    },
    {
      title: "Watches for Children",
      image: "https://m.media-amazon.com/images/I/71XEumDTJkL.jpg",
      text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus quaerat hic soluta asperiores dicta temporibus eum sed dolor, deleniti omnis dolorem assumenda reprehenderit a harum laboriosam, aspernatur modi autem blanditiis ex nam explicabo nisi? Quo provident ipsa delectus harum?",
      backgroundColor:"#ff69b4"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction , setDirection]= useState(1)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : contents.length - 1
    );
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex < contents.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <>
      <motion.div
      key={currentIndex}
      initial={{scale:0.3}}
      animate={{backgroundColor:contents[currentIndex].backgroundColor, scale:1}}
      transition={{duration: 0.6}}
      >
        <div className={Style.container}>
          <div className={Style.left}>
            <h2>{contents[currentIndex].title}</h2>
            <p>{contents[currentIndex].text}</p>
            <button className={Style.buy}><Link to={"/shop"} className={Style.buyNow}>Buy Now</Link></button>
            <div className={Style.button}>
              <div onClick={handlePrev} > <FaArrowCircleLeft  className={Style.arrow} /></div>
              <div onClick={handleNext}> <FaArrowCircleRight   className={Style.arrow}/>
              </div>
            </div>
          </div>
          <hr />
          <div className={Style.right}>
            <motion.img 
            initial= {{x :direction *1000 ,opacity:0}}
            animate= {{x : 0, opacity: 1}}
            exit={{x : -direction *1000 , opacity: 1}}
            transition={{duration: 0.5}}
            src={contents[currentIndex].image} alt="" />
          </div>
        </div>
     
      </motion.div>

    </>
  )
}

export default index