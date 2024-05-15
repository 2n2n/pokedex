import { useState, createContext, useEffect, useRef } from 'react';
import PokemonHeader from './components/PokemonHeader';
import { Outlet } from 'react-router-dom';

export const pokemonDetails = createContext();
export const search = createContext();
export const loadingTime = createContext();

function App() {
  const [pokemonInfo, setPokemonInfo] = useState(0);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <loadingTime.Provider value={{ isLoading, setIsLoading }}>
      <search.Provider
        value={{
          searchPokemon,
          setSearchPokemon,
        }}
      >
        <pokemonDetails.Provider
          value={{
            pokemonInfo,
            setPokemonInfo,
          }}
        >
          <PokemonHeader />
          <div className="container border border-3 rounded-1 shadow  mt-5 mb-5 bg-white mainPage" >
            <Outlet />
          </div>
        </pokemonDetails.Provider>
      </search.Provider>
    </loadingTime.Provider>
  );
}

export default App;
