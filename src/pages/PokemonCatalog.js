import { useContext, useEffect, useState } from 'react';
import PokemonCardComponent from '../components/PokemonCardComponent';
import pokemons from '../dummy/pokemon.json';
import { PokemonList, getPokemonURL, getPokemonByName } from '../response/PokemonListapi';
import { search } from '../App';

const PokemonCatalog = () => {
  const { searchPokemon } = useContext(search);
  const [isLoading, setIsLoading] = useState(true);
  const [PokemonApi, setPokemonAPI] = useState([]);

  useEffect(() => {
    PokemonList(10).then((data) => {
      setPokemonAPI(data.results);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {}, [PokemonApi]);

  const filterPokemonApi = PokemonApi.filter((pokemon_) => {
    // return 'test';
    return pokemon_.name.toLowerCase().includes(searchPokemon.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row g-2 row-cols-4">
        {filterPokemonApi.map((_pokemon) => {
          return <PokemonCardComponent pokeName={_pokemon.name} pokemonurl={_pokemon.url} />;
        })}
      </div>
    </div>
  );
};

export default PokemonCatalog;
