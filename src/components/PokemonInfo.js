import { useLocation } from 'react-router';
import '../component_css/PokeStat_module.css';

function PokemonInfo() {
  return (
    <>
      <div id="cardstats" className="card">
        <div className="card-body">
          <div class="container">
            <div class="row">
              <div class="col">1 of 2</div>
              <div class="col">2 of 2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonInfo;
