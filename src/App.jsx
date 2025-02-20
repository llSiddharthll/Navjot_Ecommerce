import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navabar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Products from "./Components/Products"
import ProductDetail from "./Components/ProductDetail"
import AddUser from "./Components/AddUser"
import ShowUser from "./Components/ShowUser"

export default function App(){
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/product_detail/:id" element={<ProductDetail/>}></Route>
          <Route path="/user_add" element={<AddUser/>}></Route>
          <Route path="/showuser" element={<ShowUser/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}




