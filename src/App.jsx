import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/banner/Banner'
import MainSection from './components/main-section/MainSection'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='bg-[#F5F5F5] font-inter'>
      <Navbar />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App