import React from 'react';

const Actor = ({ id, profile_path, name, character }) => {
  //   console.log(profile_path);
  return (
    <li key={id}>
      <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} width="100" />

      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default Actor;
