
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/home'

import './App.css'

function App() {

  return (
    <>
      <div className='w-full' style={{fontFamily: 'Roboto Condensed'}}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
