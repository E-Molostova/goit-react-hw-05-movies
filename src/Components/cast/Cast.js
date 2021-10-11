import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import Actor from '../actor/Actor';
import { ActorsContainer } from './CastStyled';

const Cast = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

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
          <Actor id={id} profile_path={profile_path} name={name} character={character} />
        ))}
    </ActorsContainer>
  );
};

export default Cast;
