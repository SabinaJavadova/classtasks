import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './Pages/Client/Detail'
import Favorites from './Pages/Client/Favorites'
import Header from './Pages/Client/Header'
import Home from './Pages/Client/Home'

function App() {


  return (
    <>
     <Header/>  
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Favorites" element={<Favorites/>} />
    <Route path="/Detail" element={<Detail/>} />
     </Routes>
     
    </>
  )
}

export default App
