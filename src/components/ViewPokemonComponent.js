import { Link } from 'react-router-dom';

const ViewPokemonComponent = ({ pokeName, pokemon }) => {
  return (
    <>
      {/* value={btoa(pokeName)} */}
      <Link to="details" state={pokemon} className="btn btn-warning">{`More Info`}</Link>
    </>
  );
};

export default ViewPokemonComponent;
