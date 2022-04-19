import React from 'react';
import Home from './Pages/HomePage/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopPage from './Pages/ShopPage/Shop';
import Cart from './components/Cart/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import CheckOut from './components/CheckOut/Checkout';
import SignIn from './Pages/SigninAndSignup/SignIn/SignIn';
import './App.css';
import SignUp from './Pages/SigninAndSignup/SignUp/signUp';
function App() {
    let history = useLocation();
    console.log(history.pathname);
    return (
        <div className={history.pathname === '/' ? 'app-container' : 'app'}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shoppage" element={<ShopPage />} />
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
