
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'


/** importing the pages */
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/ourWork'
import GetInvolved from './pages/getInvolved'
import OurWhy from './pages/why-we-do-it'
import Aiding from './pages/aiding'

function App() {
  return(
    <>
      <body className="w-full bg-[#FFF4C2] font-['system-ui'] bg-cover bg-center min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/our-work' element={<OurWork />} /> {/** what we do */}
            <Route path='/get-involved' element={<GetInvolved />} />
            <Route path='/why-we-do-it' element={<OurWhy />} />
            <Route path='/aiding' element={<Aiding />} />{/** ways to help */}
            <Route path='/aiding#donate' element={<Aiding />} />
            <Route path='/aiding#volunteer' element={<Aiding />} />
            <Route path='/aiding#fundraise' element={<Aiding />} />
            <Route path='/aiding#gift' element={<Aiding />} />
            <Route path='/aiding#advocate' element={<Aiding />} />
            <Route path='/aiding#partner' element={<Aiding />} />

          </Routes>
        </BrowserRouter>
      </body>
    </>
  )
}
export default App
