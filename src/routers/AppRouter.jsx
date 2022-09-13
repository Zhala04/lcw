import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import NotFoundPage from '../pages/NotFoundPage';
import { CartProvider } from 'react-use-cart';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/products' element={<Products/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='*' element={<NotFoundPage/>} ></Route>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter