import React from 'react'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import ProductList from './Pages/ProductList/ProductList'
import Product from './Pages/Product/Product'
import Login from './Pages/Login'
import Register from './Pages/Register/Register'
import Cart from './Pages/Cart/Cart'
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productList" element={<ProductList />} />
                <Route path="/product" element={<Product />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />{' '}
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App
