import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Products from "./components/Products";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Login from './Pages/Login';

function App() {
  return (
    <>
        <div className="container">
          <Navbar />
          <Routes>
            < Route path="/login" element={<Login/>}/>
            <Route path="/" element={
              <>
                <Slider />
                <Products />
              </>
            } />
            <Route path='/product/:ProductID' element={<ProductDetails/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
    </>
  );
}

export default App;
