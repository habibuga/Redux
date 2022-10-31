import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addUser } from '../redux/actions';

const ReduxHooksExample = () => {

  const articles = useSelector(state => state.articles);

  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(addUser('gracjan'));
  }

  return (
    <>
      <h1>Hooks example</h1>
      <h2>Liczba artykułów: {articles.length}</h2>
      <button onClick={handleDispatch}>Dodaj Gracjana</button>
    </>
  )

}

export default ReduxHooksExample;
