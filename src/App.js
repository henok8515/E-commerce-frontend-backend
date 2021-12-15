import React from 'react'
import Announcement from './components/Announcement/Announcement'
import Card from './components/Card/Card'
import NavBar from './components/Nav-Bar/NavBar'
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
        </div>
    )
}

export default App
