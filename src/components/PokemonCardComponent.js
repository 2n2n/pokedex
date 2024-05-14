import NameFy from "../helpers/word-helper";

const PokemonCardComponent = ({ pokemon  }) => {


    const pokemonName = NameFy(pokemon.name)

        return (
         
            <div className="col p-2">
                
                <div className="card">
                    <img 
                        src={pokemon.sprites.front_default} 
                        className="card-img-top" alt="bulbasaur" />
                    <div class="card-body text-center">
                        <h5 className="card-title text-center">{pokemonName}</h5>
                        <a href="#" className="btn btn-primary">{`View ${pokemonName}`}</a>
                    </div>
                </div>
            </div>
            
        )

}

export default PokemonCardComponent;