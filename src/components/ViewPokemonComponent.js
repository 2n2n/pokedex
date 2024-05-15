import { Link } from 'react-router-dom';

const ViewPokemonComponent = ({ pokeName, pokeHeader }) => {
  return (
    <>
      {/* value={btoa(pokeName)} */}
      <Link to="details" className="btn btn-warning">{`More Info`}</Link>
    </>
  );
};

export default ViewPokemonComponent;
