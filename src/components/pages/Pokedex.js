import PokemonPokedex from '../PokemonPokedex';
import { useLocation } from 'react-router-dom';

const Pokedex = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="container">
      <PokemonPokedex pokemonDetails={state} />
    </div>
  );
};

export default Pokedex;
