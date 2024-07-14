/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderNavbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductList from './components/Products'

const App = () => {

 

  return (
    <div className='App'>
      <div className='App-header'>
     <HeaderNavbar/>
     <div className='swiper-images'>
     <HeroSection/>
     </div>
      </div>
      <main>
        <div >
        <ProductList/>
        </div>
      </main>
    </div>
  )
}

export default App
