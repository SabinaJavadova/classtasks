import Categories from "./components/Categories";
import Favorites from "./pages/favorites";
import AddCategory from "./pages/add";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Categories App</h1>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/add-edit" element={<AddCategory />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}



export default App