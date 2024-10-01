import {  BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/index"
import Home from "./pages/Home/index"
import Footer from "./components/Footer/index"
import Shop from "./pages/Shop/index"
import Cart from "./pages/Cart/index"

function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
