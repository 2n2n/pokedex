const Pokemon = ({ data }) => {
  return (
    <>
      <img src={data.image} alt="logo" />
      <p>{data.name}</p>
    </>
  );
};

export default Pokemon;
