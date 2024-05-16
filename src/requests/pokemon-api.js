import axios from 'axios';

export const getPokemonByName = async (pokemonName = 'ditto') => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
};

export const getPokemonList = async (limit = 10) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  return data;
};

export const getPokemonMetaByURL = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
