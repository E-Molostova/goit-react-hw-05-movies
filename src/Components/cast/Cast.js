import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import Actor from '../actor/Actor';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    movieAPI.fetchCast(movieId).then(setActors);
  }, [movieId]);

  //   console.log(actors.cast);

  return (
    <ul>
      {actors.cast &&
        actors.cast.map(({ id, profile_path, name, character }) => (
          <Actor id={id} profile_path={profile_path} name={name} character={character} />
        ))}
    </ul>
  );
};

export default Cast;
