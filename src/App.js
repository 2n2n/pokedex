import { useState, createContext } from "react";
import PokemonHeader from "./components/PokemonHeader";
import { Outlet } from "react-router-dom";

export const pokemonDetails = createContext();
export const search = createContext();

function App() {
  const [pokemonInfo, setPokemonInfo] = useState(0);
  const [searchPokemon, setSearchPokemon] = useState("");

  return (
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
        <div className="container border border-2 rounded-1 mt-5 bg-white">
          <Outlet />
        </div>
      </pokemonDetails.Provider>
    </search.Provider>
  );
}

export default App;
