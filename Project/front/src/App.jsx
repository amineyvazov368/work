import {  BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/index"
import Home from "./pages/Home/index"


function App() {
 

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
