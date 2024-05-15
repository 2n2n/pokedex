import PokemonAvatarComponent from './PokemonAvatarComponent';
import ViewPokemonComponent from './ViewPokemonComponent';
import '../component_css/PokemonCardComponent_module.css';
import { useEffect, useState } from 'react';
import LoaderComponent from './LoaderComponent';
import { getPokemonURL } from '../response/PokemonListapi';

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
            <h5 className="card-title text-center">{pokeName}</h5>
            <ViewPokemonComponent pokeName={pokeName} pokeHeader={pokemon} />
          </div>
        </LoaderComponent>
      </div>
    </div>
  );
};

export default PokemonCardComponent;
