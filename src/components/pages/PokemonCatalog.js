import { useContext, useEffect, useState } from 'react';
import PokemonCardComponent from '../PokemonCardComponent';
import SearchComponent from '../SearchComponent';
import { loadingTime, search } from '../../App';
import { getPokemonList, getPokemonMetaByURL } from '../../request/pokemen-api';

const PokemonCatalog = () => {
  const { searchPokemon } = useContext(search);
  const [pokemonDataFromAPI, setPokemonDataFromAPI] = useState([]);
  const filteredPokemon = pokemonDataFromAPI.filter((person) => {
    return person.name.toLowerCase().includes(searchPokemon.toLowerCase());
  });
  useEffect(() => {
    getPokemonList(20).then((data) => {
      setPokemonDataFromAPI(data.results);
    });
  }, []);

  useEffect(() => {
    console.log(pokemonDataFromAPI);
  }, [pokemonDataFromAPI]);

  return (
    <div className="container">
      <SearchComponent />
      <div className="row g-2 row-cols-4">
        {filteredPokemon.map((_pokemon) => {
          return <PokemonCardComponent pokemon_url={_pokemon.url} _pokemonName={_pokemon.name} key={_pokemon.name} />;
        })}
      </div>
    </div>
  );
};

export default PokemonCatalog;
