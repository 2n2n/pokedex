import { useContext } from "react";
import { search } from "../App";

const SearchComponent = () => {
  const { setSearchPokemon } = useContext(search);
  return (
    <div className="my-3 row">
      <label htmlFor="search" className="col-sm-2 col-form-label">
        🔍 Search a Pokemon
      </label>
      <div className="col-sm-10">
        <input
          type="input"
          className="form-control"
          id="search"
          placeholder="e.g. pikachu"
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
