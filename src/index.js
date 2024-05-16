import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pokedex from './components/pages/Pokedex';
import ShinyPokemonForm from './components/ShinyPokemonComponent';
import PokemonCatalog from './components/pages/PokemonCatalog';
import SearchComponent from './components/SearchComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PokemonCatalog className='row g-2 row-cols-4'/>,
        children: [
          {
            index: true,
            element: <SearchComponent />,
          },
        ],
      },
      {
        path: '/details',
        element: <Pokedex />,
        children: [
          {
            index: true,
            element: <PokemonCatalog className='row g-2 row-cols-1'/>,
          },
        ],
      },
    ],
  },
  {
    path: '/shinypokemon',
    element: <ShinyPokemonForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
