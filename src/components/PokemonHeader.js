const PokemonHeader = () => {
  return (
    <div className="container ">
      <center>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          className="card-img-top"
          height={150}
        />
      </center>
      <div className="container mt-3">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active text-dark"
              aria-current="page"
              href="/"
            >
              📱 Pokedex
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              🐉Legendary Pokemon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/shinypokemon">
              ✨Shiny Pokemon
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              💁🏻‍♂️About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonHeader;
