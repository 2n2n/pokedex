import NavBarComponent from './components/NavBarComponent';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router';

export const PokemonInfoContext = createContext();
export const search = createContext();
function App() {
  const [pokeNameHeader, setpokemonName] = useState(0);
  const [searchPokemon, setSearchPokemon] = useState('');

  return (
    <search.Provider
      value={{
        searchPokemon,
        setSearchPokemon,
      }}
    >
      <PokemonInfoContext.Provider
        value={{
          pokeNameHeader,
          setpokemonName,
        }}
      >
        <div>
          <NavBarComponent />

          {
            <div className="container">
              <Outlet />
            </div>
          }
        </div>
      </PokemonInfoContext.Provider>
    </search.Provider>
  );
}

export default App;

// loading state by default in true thne if cliked will show spinner and hide
