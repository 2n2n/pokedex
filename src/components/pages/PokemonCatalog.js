import { useContext, useEffect, useState, forwardRef } from 'react';
import PokemonCardComponent from '../PokemonCardComponent';
import { loadingTime, search } from '../../App';
import { getPokemonList, getPokemonMetaByURL } from '../../request/pokemen-api';
import { Outlet } from 'react-router-dom';

const PokemonCatalog = ({ className }) => {
  const { searchPokemon } = useContext(search);
  const [pokemonDataFromAPI, setPokemonDataFromAPI] = useState([]);
  const filteredPokemon = pokemonDataFromAPI.filter((person) => {
    return person.name.toLowerCase().includes(searchPokemon.toLowerCase());
  });

  useEffect(() => {
    getPokemonList(8).then((data) => {
      setPokemonDataFromAPI(data.results);
    });
  }, []);

  return (
    <div className="container">
      <Outlet />
      <div className={className}>
        {filteredPokemon.map((_pokemon) => {
          return <PokemonCardComponent pokemon_url={_pokemon.url} _pokemonName={_pokemon.name} key={_pokemon.name} />;
        })}
      </div>
      <div class='mb-2'>
        <nav >
          <ul class="pagination nav justify-content-center">
            <li class="page-item ">
              <a class="page-link" href="#">Previous</a>
            </li>
            
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PokemonCatalog;
