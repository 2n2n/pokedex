import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PokemonCatalog from './pages/PokemonCatalog';
import PokeIndex from './pages/PokeIndex';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '/app',
        element: <PokemonCatalog />,
      },
      {
        path: 'details',
        element: <PokeIndex />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
