import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HelmetProvider} from "react-helmet-async"
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './Context/FavoritesContext'

createRoot(document.getElementById('root')).render(
<FavoritesProvider>
  <HelmetProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
  </HelmetProvider>
</FavoritesProvider>

)
