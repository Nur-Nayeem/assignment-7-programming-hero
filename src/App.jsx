import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/banner/Banner'
import MainSection from './components/main-section/MainSection'

const App = () => {
  return (
    <div className='bg-[#F5F5F5] font-inter'>
      <Navbar />
      <Banner />
      <MainSection />
    </div>
  )
}

export default App