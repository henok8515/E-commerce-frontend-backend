import React from 'react'
import Announcement from './components/Announcement/Announcement'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import NavBar from './components/Nav-Bar/NavBar'
import News from './components/News/News'
import Products from './components/Products/Products'
import Slider from './components/Slider/Slider'

function App() {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Card />
            <Products />
            <News />
            <Footer />
        </div>
    )
}

export default App
