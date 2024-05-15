import CounterComponent from "../CounterComponent";
import { useState, createContext } from "react";
import "./App.css";
import SearchComponent from "../SearchComponent";
import PokemonCardComponent from "../PokemonCardComponent";
import pokemons from '../../dummy/pokemon.json';
import NavigationComponent from "../NavigationComponent";


export const CounterContext = createContext();
export const LoaderContext = createContext();

function App() {
  const [counterValue , setCounterValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <CounterContext.Provider value={{
      counterValue, 
      setCounterValue,
    }}>
      <LoaderContext.Provider value={{
        isLoading,
        setIsLoading
      }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <NavigationComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <CounterComponent />
            </div>
            <div className="col">
            <SearchComponent />
              <div className="row g-2">
                { 
                  pokemons.map((_pokemon) => {
                    return <PokemonCardComponent pokemon={_pokemon} />;
                  })
                }
              </div>
            </div>
          </div>
          
        </div>
      </LoaderContext.Provider>
      
    </CounterContext.Provider>
  );
}

export default App;