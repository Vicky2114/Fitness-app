import React from 'react'
import "../assets/css/Home.css"

import sc from "../assets/images/sc.jpeg"
import Slider from '../components/Slider'
import TopNews from '../components/TopNews'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <div className="utils">
        <i className="fas fa-bell"></i>
        <i className="fas fa-calendar-days"></i>
      </div>
      <div className="supImgContainer">
        <img src={sc} className="scImage" />
        <div className="supContent">
          <p>Previously, parties that need to show their court order to others may be asked to provide a certified true copy .</p>
          <p>Previously, parties that need to show their court order to others may be asked to provide a certified true copy .</p>
        </div>
      </div>
      <h1 className='alignCenter underline my-5'>Top News</h1>
      <TopNews/>
      <h1 className='alignCenter underline my-5'>Reviews</h1>
      <Slider />
      <Footer/>
    </div>


  )
}

export default Home