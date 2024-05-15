import { useState, useEffect } from 'react';
import '../components/componentsCss/imageCss.css'
const PokemonAvatarComponent = ({ pokemon }) => {
  const [pokemonView, setPokemonView] = useState(true);

  const pokemonChangeView = () => {
    setPokemonView(!pokemonView);
  };

  return (
    <div className="pokemon-card">
      {pokemonView ? (
        <img src={pokemon.sprites.front_default} className="card-img-top imgPokemonShadow" alt={pokemon.name} />
      ) : (
        <img src={pokemon.sprites.back_default} className="card-img-top imgPokemonShadow" alt={pokemon.name} />
      )}

      <center>
        <div className="navigation-buttons">
          <button className="btn" onClick={pokemonChangeView}>
            ◀
          </button>
          <button className="btn" onClick={pokemonChangeView}>
            ▶
          </button>
        </div>
      </center>
    </div>
  );
};

export default PokemonAvatarComponent;
