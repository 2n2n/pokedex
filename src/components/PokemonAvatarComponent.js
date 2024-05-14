import { useState,useEffect } from "react";

const PokemonAvatarComponent = ({ pokemon }) => {
    const [pokemonView, setPokemonView] = useState(true)

    const pokemonChangeView = () =>{
      setPokemonView(!pokemonView)
    }
    
    useEffect(() => {
        

    }, [pokemonView]);
    
    return (
        <div className="pokemon-card">
            {
               pokemonView ? 
                <img 
                    src={pokemon.sprites.front_default} 
                    className="card-img-top" 
                    alt={pokemon.name} 
                />
           :    <img 
                    src={pokemon.sprites.back_default} 
                    className="card-img-top" 
                    alt={pokemon.name} 
                />
            }

            <center>
                <div className="navigation-buttons">
                    <button onClick={pokemonChangeView} >&lt;</button>
                    <button onClick={pokemonChangeView} >&gt;</button>
                </div>
            </center>
        </div>
      
    )
}

export default PokemonAvatarComponent;