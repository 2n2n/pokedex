const SearchComponent = () => {
  return (
    <div className="my-3 row">
      <label htmlFor="search" className="col-sm-2 col-form-label">
        Search
      </label>
      <div className="col-sm-10">
        <input
          type="input"
          className="form-control"
          id="search"
          placeholder="e.g. pikachu"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
