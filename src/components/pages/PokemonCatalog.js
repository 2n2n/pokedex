import { useContext } from "react";
import PokemonCardComponent from "../PokemonCardComponent";
import SearchComponent from "../SearchComponent";
import pokemons from '../../dummy/pokemon.json';
import { search } from "../../App";

const PokemonCatalog = () => {
    const { searchPokemon } = useContext(search);
    const filteredPokemon = pokemons.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .includes(searchPokemon.toLowerCase()) 
          );
        }
      );
    return (
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
        
    )
}

export default PokemonCatalog;