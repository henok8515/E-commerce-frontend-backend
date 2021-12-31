import React from 'react'
import CardList from '../../components/Card/CardList'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Nav-Bar/NavBar'
import Products from '../../components/Products/Products'
import Slider from '../../components/Slider/Slider'
const Home = () => {
    return (
        <div
            style={{
                overflow: 'hidden',
            }}
        >
            <NavBar />
            <Slider />
            <hr />
            <CardList />
            <hr />
            <Products />

            <Footer />
        </div>
    )
}

export default Home
