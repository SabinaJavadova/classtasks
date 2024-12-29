import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import FavoritesProvider from './Context/FavoritesContext'; // Import FavoritesProvider
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <HelmetProvider>

      <FavoritesProvider> 
        <App />
      </FavoritesProvider>
    </HelmetProvider>
    </BrowserRouter>
 
);
