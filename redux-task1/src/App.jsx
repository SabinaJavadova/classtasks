import Categories from "./components/Categories"
import { Route, Routes } from 'react-router-dom'
import AddCategory from './pages/add'
function App() {


  return (
    <>

      <h1>Categories</h1>
      <Routes>
        <Route path='/add-edit' element={<AddCategory />} />

      </Routes>
      <Categories />

    </>
  )
}

export default App