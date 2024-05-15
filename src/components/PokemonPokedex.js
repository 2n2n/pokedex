import NameFy from '../helpers/word-helper';
import PokemonAvatarComponent from './PokemonAvatarComponent';
import '../components/componentsCss/cardScroll.css';
import { Outlet, Route } from 'react-router-dom';

function PokemonPokedex({ pokemonDetails }) {
  const pokemonName = NameFy(pokemonDetails.pokemon.name);
  // console.log(pokemonDetails.pokemon.moves);
  // const { move } = pokemonDetails.pokemon.moves;
  // console.log(move);
  return (
    <>
      <div class="row mt-3 mb-3">
        <div class="col-sm-8">
          <div class="mb-3">
            <div class="card-body">
              <h1 class="card-title pokeballIconInName"><img src="https://www.kindpng.com/picc/m/757-7573905_transparent-blue-pokeball-clipart-pixel-pokeball-png-png.png" />{pokemonName} &nbsp;
              {pokemonDetails.pokemon.types.map((_type) => {
                return (
                  <button href="#" class="btn btn-primary m-1" disabled>
                    {NameFy(_type.type.name)} 
                  </button>
                );
              })} </h1>
              <p class="card-text">{pokemonDetails.pokemon.about}</p>
            </div>
          </div>

          <div class="card  imagePokemonBody" 
          style={{ 
            backgroundImage: `url("https://e0.pxfuel.com/wallpapers/269/183/desktop-wallpaper-rotom-pokedex-background.jpg")` }}
          >
              <center>
                <div class="card-body imagePokemon ">
                  <PokemonAvatarComponent pokemon={pokemonDetails.pokemon} /> 
                </div>
              </center>
            </div>
          <div class="card imagePokemonBody mt-1">
            <div className=" card-body scrollable-div" data-bs-spy="scroll" data-bs-smooth-scroll="true">
              <div className="fixed-header">
                <h5 className="card-title">Moves/Skills</h5>
              </div>
              <center>
                {pokemonDetails.pokemon.moves.map((_move, index) => {
                  if (index >= 17) {
                    return null; // Ensure to return null instead of undefined
                  }
                  return (
                    <button href="#" className="btn btn-primary m-1" disabled key={index}>
                      {NameFy(_move.move.name)}
                    </button>
                  );
                })}
              </center>
            </div>
          </div>
        </div>
        <div class="col-sm-4 listOfPokemon">
          <div class="card mt-1">
            <div class="card-header">
              <div className="fixed-header">
                <h3 className="card-title">POKEMON LIST</h3>
              </div>
            </div>
            <div className="card-body scrollable-div" data-bs-spy="scroll" data-bs-smooth-scroll="true">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonPokedex;
