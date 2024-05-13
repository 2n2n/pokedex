import PokemonCardComponent from "./components/PokemonCardComponent";
import SearchComponent from "./components/SearchComponent";
import pokemons from './dummy/pokemon.json';

function App() {
  return (
   <>
    <div className="container">
        <center>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
            className="card-img-top" height={100} />
        </center>
    </div>
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
