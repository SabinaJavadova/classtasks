import { useState } from 'react'
import './App.css'
import Header from './Layout/Header-client'
import Detail from './Pages/Client/Detail'
import Favorites from './Pages/Client/Favorites'
import Home from './Pages/Client/Home'
import Products from './Pages/Client/Products'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './Pages/Client'
import AdminLayout from './Pages/Admin'
import Dashboard from './Pages/Admin/Dashboard'
import AddProducts from './Pages/Admin/AddProducts'
import AdminProducts from './Pages/Admin/Products'
import Basket from './Pages/Client/Basket'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route path='/' element={<ClientLayout />}>

          <Route index element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Basket" element={<Basket />} />
        </Route>

        <Route path='/Admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='Products' element={<AdminProducts />} />
          <Route path='AddProducts' element={<AddProducts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
