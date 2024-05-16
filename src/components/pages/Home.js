import { useLocation } from 'react-router-dom';

import NavigationComponent from '../NavigationComponent';
import TestComponent from '../TestComponent';
import { useEffect } from 'react';
import { getPokemonByName, getPokemonList } from '../../requests/pokemon-api';

const Home = () => {
  let { state } = useLocation();

  useEffect(() => {
    getPokemonList(10).then((data) => {
      console.log('🚀 ~ .then ~ data:', data);
    });
  }, []);

  return (
    <>
      <h1>Welcome Home! {state?.some}</h1>
      <NavigationComponent />
      <TestComponent />
    </>
  );
};

export default Home;
