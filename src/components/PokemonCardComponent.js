import NameFy from "../helpers/word-helper";

const PokemonCardComponent = ({ pokemon }) => {
    const pokemonName = NameFy(pokemon.name)
    return (
        <div className="card" style={{ 
            width: '18rem'
        }}>
            <img 
                src={pokemon.sprites.front_default} 
                className="card-img-top" alt="bulbasaur" />
            <div class="card-body">
                <h5 className="card-title">{pokemonName}</h5>
                <a href="#" class="btn btn-primary">{`View ${pokemonName}`}</a>
            </div>
        </div>
    )
}

export default PokemonCardComponent;