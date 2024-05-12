import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

const pokemons = [
  { name: 'Pikachu', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
  { name: 'Charizard', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { name: 'Squirtle', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ol>
        { pokemons.map(function(pokemon) {
          return (
            <li><Pokemon data={pokemon} /></li>
          );
        })}
        </ol>
        
               
      </header>
    </div>
  );
}

export default App;
