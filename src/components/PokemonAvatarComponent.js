const PokemonAvatarComponent = ({ pokemon }) => {
  return (
    <img
      src={pokemon.sprites.front_default}
      className="card-img-top"
      alt="bulbasaur"
    />
  );
};

export default PokemonAvatarComponent;
