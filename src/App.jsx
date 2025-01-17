import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './dashboard/Home'
import Product from './dashboard/Product'

const App = () => {
  return (
    <div  className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App