import React from 'react';
import './App.css';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Hero/>
      <HeadlineCards/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
