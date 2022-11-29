import React from 'react';
import './App.css';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Keyboard from './components/Keyboard';
import ScreenPc from './components/ScreenPc';
import AppleProduct from './components/AppleProduct';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Hero/>
      <HeadlineCards/>
      <Products/>
      <Keyboard/>
      <ScreenPc/>
      <AppleProduct/>
      <Footer/>
    </div>
  );
}

export default App;
