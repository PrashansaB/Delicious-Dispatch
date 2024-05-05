import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Carousel />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home

