import PokemonCardComponent from "./components/PokemonCardComponent";
import SearchComponent from "./components/SearchComponent";
import NavBarComponent from "./components/NavBarComponent";
import pokemons from "./dummy/pokemon.json";

function App() {
  return (
    <div>
      <NavBarComponent />

      <div className="container">
        <div id="layoutdiv" className="row g-2 row-cols-4">
          {pokemons.map((_pokemon) => {
            return <PokemonCardComponent pokemon={_pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// loading state by default in true thne if cliked will show spinner and hide
