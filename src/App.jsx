import React, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/banner/Banner'
import MainSection from './components/main-section/MainSection'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';

const fetchCustomerTickets = fetch('/data.json').then(res => res.json())

const App = () => {
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolves, setResolves] = useState([])
  return (
    <div className='bg-[#F5F5F5] font-inter'>
      <Navbar />
      <Banner taskStatus={taskStatus} resolves={resolves} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <MainSection fetchCustomerTickets={fetchCustomerTickets} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolves={resolves} setResolves={setResolves} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App