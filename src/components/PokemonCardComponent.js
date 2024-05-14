import NameFy from "../helpers/word-helper";
import PokemonAvatarComponent from "./PokemonAvatarComponent";

const PokemonCardComponent = ({ pokemon }) => {
    const pokemonName = NameFy(pokemon.name)
    return (
        <div className="col p-2">
            <div className="card">
                <PokemonAvatarComponent pokemon={pokemon}/>
                <div class="card-body text-center">
                    <h5 className="card-title text-center">{pokemonName}</h5>
                    <a href="#" class="btn btn-primary">{`View ${pokemonName}`}</a>
                </div>
            </div>
        </div>
        
    )
}

export default PokemonCardComponent;