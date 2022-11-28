import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import ProductsDetail from './components/ProductsDetail';
import Login from './components/Login';
import Register from './components/Register';
import Apple from "../src/pages/Apple"
import LaptopGaming from './pages/LaptopGaming';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<App />} />
        <Route path="/products/:productId" element={<ProductsDetail />} />
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/laptopgaming' element={<LaptopGaming/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

