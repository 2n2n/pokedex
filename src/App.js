import PokemonCardComponent from "./components/PokemonCardComponent";
import SearchComponent from "./components/SearchComponent";
import pokemons from './dummy/pokemon.json';

function App() {

  return (
    <div className="container">
      <SearchComponent />
      { 
        pokemons.map((_pokemon) => {
          return <PokemonCardComponent pokemon={_pokemon} />;
        })
      }
      
    </div>
  );
}

export default App;
