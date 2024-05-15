import { useState } from 'react';

const PokemonAvatarComponent = ({ pokemon, pokemonurl }) => {
  const [pokesprites, setChange] = useState(true);

  const pokemonChangeView = () => {
    setChange(!pokesprites);
  };

  return (
    <>
      <div className="container pt-1">
        {pokesprites ? (
          <img src={pokemon.sprites.front_default} className="card-img-top" alt="bulbasaur" />
        ) : (
          <img src={pokemon.sprites.back_default} className="card-img-top" alt="bulbasaur" />
        )}
      </div>
    </>
  );
};

export default PokemonAvatarComponent;
