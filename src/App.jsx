import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/dashboard/Home'
import Product from './assets/dashboard/Product'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/product'element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
