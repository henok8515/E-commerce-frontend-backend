import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import ProductList from './Pages/ProductList'

import Product from './Pages/Product'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productList" element={<ProductList />} />
                <Route path="/product" element={<Product />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Routes>
        </div>
    )
}

export default App
