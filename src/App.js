import PokemonCardComponent from "./components/PokemonCardComponent";
import SearchComponent from "./components/SearchComponent";
import pokemons from './dummy/pokemon.json';

function App() {

  return (
    <div className="container">
      <SearchComponent />
      <div className="row g-2 row-cols-4">
        { 
          pokemons.map((_pokemon) => {
            return <PokemonCardComponent pokemon={_pokemon} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
