import React from 'react';
import './App.css';
// import Category from './components/Category';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Products/>
      {/* <Category/> */}
      <Footer/>
    </div>
  );
}

export default App;
