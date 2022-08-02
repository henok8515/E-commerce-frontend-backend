import React, { useState } from 'react';
import Home from './Pages/HomePage/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './Pages/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './Pages/CheckOut';
import SignIn from './Pages/SigninAndSignup/SignIn/SignIn';
import './App.css';
import SignUp from './Pages/SigninAndSignup/SignUp/SignUp';
import Product from './Pages/Products';

function App() {
    const [currentUser, setCurrentUser] = useState([]);
    let history = useLocation();

    return (
        <div className={history.pathname === '/' ? 'app-container' : 'app'}>
            {history.pathname === '/login' ||
            history.pathname === '/register' ? null : (
                <Header
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                />
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
                <Route
                    path="/product/:catagories      "
                    element={<Product />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route
                    path="/login"
                    element={<SignIn setCurrentUser={setCurrentUser} />}
                />
                <Route
                    path="/register"
                    element={<SignUp setCurrentUser={setCurrentUser} />}
                />
            </Routes>
            {history.pathname === '/login' || '/register' ? null : <Footer />}
        </div>
    );
}
export default App;
