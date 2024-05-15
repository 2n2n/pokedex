import PokemonAvatarComponent from './PokemonAvatarComponent';
import ViewPokemonComponent from './ViewPokemonComponent';
import '../component_css/PokemonCardComponent_module.css';
import { useEffect, useState } from 'react';
import LoaderComponent from './LoaderComponent';
import { getPokemonURL } from '../response/PokemonListapi';
import '../component_css/FontStyle_module.css';
import NameFy from '../helpers/word-helper';

const PokemonCardComponent = ({ pokeName, pokemonurl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  //   console.log(isload);
  useEffect(() => {
    getPokemonURL(pokemonurl)
      .then((data) => {
        setPokemon(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pokemonurl]);

  return (
    <div className="col p-2">
      <div className="card">
        <LoaderComponent loading={isLoading}>
          <PokemonAvatarComponent pokemon={pokemon} />
          <div className="card-body text-center">
            <h5 className="card-title text-center">{NameFy(pokeName)}</h5>
            <ViewPokemonComponent pokeName={pokeName} pokemon={pokemon} />
          </div>
        </LoaderComponent>
      </div>
    </div>
  );
};

export default PokemonCardComponent;
