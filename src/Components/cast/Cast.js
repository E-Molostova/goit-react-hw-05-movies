import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import Actor from '../actor/Actor';
import { ActorsContainer } from './CastStyled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI
      .fetchCast(movieId)
      .then(setActors)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ActorsContainer>
      {actors &&
        actors.map(({ id, profile_path, name, character }) => (
          <Actor key={id} id={id} profile_path={profile_path} name={name} character={character} />
        ))}
    </ActorsContainer>
  );
};

export default Cast;
