import { useState,createContext } from "react";
import PokemonCardComponent from "./components/PokemonCardComponent";
import PokemonHeader from "./components/PokemonHeader";
import SearchComponent from "./components/SearchComponent";
import pokemons from './dummy/pokemon.json';
import PokemonPokedex from "./components/PokemonPokedex";


export const pokemonDetails = createContext();
export const search = createContext();



function App() {

  const divStyle = {
    backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2149007819.jpg?t=st=1715730276~exp=1715733876~hmac=90b010e3601c347d362974b4c9020cfc640aa428b4aa31451ff06ee51e343edf&w=740')`,
    backgroundSize: 'cover'  
  };
  const [pokemonInfo, setPokemonInfo] = useState(0)
  const [searchPokemon, setSearchPokemon] = useState('')
  const searchField =  searchPokemon
  const filteredPokemon = pokemons.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );


  return (
    <search.Provider value={{
      searchPokemon,
      setSearchPokemon
    }}>
      <pokemonDetails.Provider value={{
        pokemonInfo,
        setPokemonInfo
      }} >
        <PokemonHeader/>
        <div className="container border border-2 rounded-1 mt-5 bg-white">
          {
            pokemonInfo === 0 ? 
            <div className="container" >
              <SearchComponent />
              <div className="row g-2 row-cols-4">
                { 
                  filteredPokemon.map((_pokemon) => {
                    return <PokemonCardComponent pokemon={_pokemon}  key={_pokemon.name}/>;
                  })
                }
              </div>
            </div>
            : 
            <div className="container" >
              <PokemonPokedex pokemonDetails ={pokemonInfo} />
            </div>   
          }
          
        </div>
      </pokemonDetails.Provider>
    </search.Provider>
  );
}

export default App;
