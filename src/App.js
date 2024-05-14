import PokemonCardComponent from "./components/PokemonCardComponent";
import PokemonHeader from "./components/PokemonHeader";
import SearchComponent from "./components/SearchComponent";
import pokemons from './dummy/pokemon.json';

function App() {
  return (
   <>
    <PokemonHeader/>
    <div className="container border border-2 rounded-1 mt-5 mb-5">
      <SearchComponent />
      <div className="row g-2 row-cols-4">
        { 
          pokemons.map((_pokemon) => {
            // what is the use of keys
            return <PokemonCardComponent pokemon={_pokemon}  key={_pokemon.name}/>;
          })
        }
      </div>
    </div>
    </>
  );
}

export default App;
