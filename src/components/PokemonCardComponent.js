import { useEffect, useState, useContext } from 'react';
import LoaderComponent from './LoaderComponent';
import PokemonAvatarComponent from './PokemonAvatarComponent';
import { Link } from 'react-router-dom';
import { getPokemonMetaByURL } from '../request/pokemen-api';
import NameFy from '../helpers/word-helper';

const PokemonCardComponent = ({ pokemon_url, _pokemonName }) => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokemonName = NameFy(_pokemonName);
  useEffect(() => {
    getPokemonMetaByURL(pokemon_url)
      .then((data) => {
        setPokemon(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="col p-2">
      <div className="card">
        <LoaderComponent loading={isLoading}>
          <PokemonAvatarComponent pokemon={pokemon} />
          <div class="card-body text-center">
            <h5 className="card-title text-center">{pokemonName}</h5>
            <Link className="btn btn-primary" to="details" state={{ pokemon }}>
              {`View ${pokemonName}`}
            </Link>
          </div>
        </LoaderComponent>
      </div>
    </div>
  );
};

export default PokemonCardComponent;
