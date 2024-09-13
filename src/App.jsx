import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {/* Params */}
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
          <Route path='/product' element={<Products/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App