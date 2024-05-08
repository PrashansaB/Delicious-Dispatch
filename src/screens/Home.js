import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'

function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  let loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    console.log(response[0], response[1]);
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  }
  useEffect(() => {
    loadData()
  }, [])




  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Carousel />
      <div className='container' style={{ display: "flex", flexDirection: "column" }} >
        {
          foodCat != [] ? foodCat.map((data) => {
            return (<div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>{data.Category}</div>
              <hr />
              {foodItem != [] ? foodItem.filter((item) => item.CategoryName == data.Category).map((eachItem) => {
                return <div key={eachItem._id} className='col-12 col-md-6 col-lg-3'>
                  <Card name={eachItem.name} description={eachItem.description} img={eachItem.img} options={eachItem.options[0]} /> </div>
              })
                : <div>Data not found</div>}
            </div>)
          }) : "Ye ni kr rha kaaam "
        }
      </div>

      <Footer />
    </div>
  )
}

export default Home

