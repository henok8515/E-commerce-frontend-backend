import React, { useEffect, useState } from 'react';
import Home from './Pages/HomePage/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './Pages/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './Pages/CheckOut';
import SignIn from './Pages/SigninAndSignup/SignIn/SignIn';
import './App.css';
import SignUp from './Pages/SigninAndSignup/SignUp/signUp';
import Product from './Pages/Products';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    let history = useLocation();
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/users')
            .then((res) => {
                const data = res.data;
                setUsers(data);
                console.log(res.data);
            })
            .catch((err) => console.log(err, ' erroer'));
    }, []);

    return (
        <div className={history.pathname === '/' ? 'app-container' : 'app'}>
            {/* {history.pathname === '/login' || '/register' ? null : <Header />} */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
                <Route
                    path="/product/:catagories      "
                    element={<Product />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Routes>
            {history.pathname === '/login' || '/register' ? null : <Footer />}
        </div>
    );
}
export default App;
