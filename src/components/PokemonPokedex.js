import NameFy from "../helpers/word-helper";
import PokemonAvatarComponent from "./PokemonAvatarComponent";

function PokemonPokedex({pokemonDetails}) {
    const pokemonName = NameFy(pokemonDetails.pokemon.name)
  return (
    <>
        <div class="row mt-3 mb-3">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <PokemonAvatarComponent pokemon={pokemonDetails.pokemon}/> 
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            {pokemonName}
                            {
                                pokemonDetails.pokemon.types.map((_type) => {
                                    return <a href="#" class="btn btn-primary m-1" >{NameFy(_type)}</a>
                                })
                            }

                        </h3>
                        <p class="card-text">{pokemonDetails.pokemon.about}</p>
                    </div>
                </div>
                <div class="card mt-1">
                    <div class="card-body">
                        <h5 class="card-title">Moves/Skills</h5>
                            {
                                pokemonDetails.pokemon.moves.map((_move) => {
                                    return <a href="#" class="btn btn-primary m-1" >{NameFy(_move)}</a>
                                })
                            }
                    </div>
                </div>
               
            </div>
        </div>
      
        
    </>
  );
}

export default PokemonPokedex;