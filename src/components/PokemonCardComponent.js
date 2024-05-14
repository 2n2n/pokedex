import { useEffect, useState } from "react";
import NameFy from "../helpers/word-helper";
import LoaderComponent from "./LoaderComponent";
import PokemonAvatarComponent from "./PokemonAvatarComponent";

const PokemonCardComponent = ({ pokemon }) => {
    const pokemonName = NameFy(pokemon.name)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // set up
        function randomGen(min, max) {
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            return rand;
        }

        const timeout = randomGen(500, 3000);

        const timeoutInstance = setTimeout(() => {
            setIsLoading(false);
        }, [timeout]);

        return () => {
            // clean up
            clearTimeout(timeoutInstance);
        }
    }, []);

    return (
        <div className="col p-2">
            <div className="card">
                <LoaderComponent loading={isLoading}>
                    <PokemonAvatarComponent pokemon={pokemon}/>
                    <div class="card-body text-center">
                        <h5 className="card-title text-center">{pokemonName}</h5>
                        <a href="#" class="btn btn-primary">{`View ${pokemonName}`}</a>
                    </div>
                </LoaderComponent>
            </div>
        </div>
        
    )
}

export default PokemonCardComponent;