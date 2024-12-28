import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import FavoritesProvider from './Context/FavoritesContext'; // Import FavoritesProvider

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <FavoritesProvider> 
        <App />
      </FavoritesProvider>
    </BrowserRouter>
 
);
