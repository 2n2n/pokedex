const PokemonCardComponent = ({ pokemon }) => {
    return (
        <div className="card" style={{ 
            width: '18rem'
        }}>
            <img 
                src={pokemon.sprites.front_default} 
                className="card-img-top" alt="bulbasaur" />
            <div class="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <a href="#" class="btn btn-primary">{`View ${pokemon.name}`}</a>
            </div>
        </div>
    )
}

export default PokemonCardComponent;