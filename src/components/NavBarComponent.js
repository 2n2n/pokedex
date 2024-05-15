import '../component_css/NavBarComponent_module.css';
import mainLogo from '../pics/logo.png';
import { search } from '../App';
import { useContext } from 'react';

const NavBarComponent = () => {
  const { searchPokemon, setSearchPokemon } = useContext(search);
  console.log(searchPokemon);
  return (
    <nav class="navbar navbar-expand-sm navbar-light  bg-light  mb-5">
      <div class="container-fluid">
        <img src={mainLogo} class="img-logo" alt="logo" style={{ height: '3rem' }}></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)"></a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchPokemon(e.target.value)}
            />
            <button class="btn btn-warning" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
