import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/banner/Banner'

const App = () => {
  return (
    <div className='bg-[#F5F5F5] h-screen font-inter'>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App