import { useLocation } from 'react-router';
import PokemonInfo from '../components/PokemonInfo';
import '../component_css/PokeIndex_module.css';
import NameFy from '../helpers/word-helper';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faCaretLeft, faCaretRight, faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../component_css/FontStyle_module.css';
import { Link } from 'react-router-dom';

const PokeIndex = () => {
  let pokemon = useLocation();
  const pokeName = NameFy(pokemon.state.name);
  const poAbilities = pokemon.state.abilities;
  const poMoves = pokemon.state.moves;
  const poTypes = pokemon.state.types;
  const poColors = ['btn btn-warning m-1', 'btn btn-info m-1'];
  const [click, setClick] = useState(true);

  const onclickHandler = () => {
    setClick(() => {
      click === true ? setClick(false) : setClick(true);
    });
  };

  return (
    <div className="container">
      <div id="cardstats" className="card">
        <div className="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="position-relative">
                  <div class="position-absolute top-0 start-0">
                    <Link to="/App" class="btn btn-warning m-1" disabled="disabled">
                      Back
                    </Link>
                  </div>
                </div>

                {click === true ? (
                  <img
                    id="cardCircle"
                    src={pokemon.state.sprites.front_default}
                    className="card-img-top"
                    alt="avatar"
                  />
                ) : (
                  <img id="cardCircle" src={pokemon.state.sprites.back_default} className="card-img-top" alt="avatar" />
                )}
              </div>
              <div id="" class="col">
                <h4>Moves</h4>
                {poMoves.slice(0, 10).map((_moves) => {
                  return (
                    <a class="btn btn-warning m-1" disabled="disabled">
                      {NameFy(_moves.move.name)}
                    </a>
                  );
                })}
              </div>
            </div>
            <div class="row">
              <div id="pokeNamediv" class="col">
                <h1>{pokeName}</h1>
              </div>
              <div class="col">
                <h4>Abilities</h4>
                {poAbilities.map((_ability) => {
                  return (
                    <a class="btn btn-warning m-1" disabled="disabled">
                      {NameFy(_ability.ability.name)}
                    </a>
                  );
                })}
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a id="arrows" class={poColors} onClick={onclickHandler} disabled="disabled">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </a>
                <a id="arrows" class={poColors} onClick={onclickHandler} disabled="disabled">
                  <FontAwesomeIcon icon={faCaretRight} />
                </a>
              </div>
              <div class="col">
                <img id="cardEvo" src={pokemon.state.sprites.front_shiny} className="card-img-top" alt="avatar" />
                <img id="cardEvo" src={pokemon.state.sprites.back_shiny} className="card-img-top" alt="avatar" />
                {/* {poTypes.map((_types) => {
                  return (
                    <a href="#" class={poColors} disabled="disabled">
                      {NameFy(_types.type.name)}
                    </a>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeIndex;
