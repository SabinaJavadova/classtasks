import { useState } from 'react'
import './App.css'
import Header from './Layout/Header-client'
import Detail from './Pages/Client/Detail'
import Favorites from './Pages/Client/Favorites'
import Home from './Pages/Client/Home'
import Products from './Pages/Client/Products'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Favorites" element={<Favorites />}/>
    <Route path="/Detail" element={<Detail />}/>
    <Route path="/Products" element={<Products />}/>
    </Routes>
    </>
  )
}

export default App
