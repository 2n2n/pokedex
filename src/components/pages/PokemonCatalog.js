import { useContext, useEffect, useState } from 'react';
import PokemonCardComponent from '../PokemonCardComponent';
import { loadingTime, search } from '../../App';
import { getPokemonList, getPokemonMetaByURL } from '../../request/pokemen-api';
import { Outlet } from 'react-router-dom';

const PokemonCatalog = ({changingColNumber = 0}) => {
  const [ changingColNumberCss, setChangingColNumberCss] = useState(changingColNumber);
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
    if (changingColNumberCss === 0) {
      setChangingColNumberCss("row g-2 row-cols-4")
    }
  }, [changingColNumberCss]);

  return (
    <div className="container">
      <Outlet />
      <div className={changingColNumberCss}>
        {filteredPokemon.map((_pokemon) => {
          return <PokemonCardComponent pokemon_url={_pokemon.url} _pokemonName={_pokemon.name} key={_pokemon.name} />;
        })}
      </div>
    </div>
  );
};

export default PokemonCatalog;
