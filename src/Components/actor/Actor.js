import React from 'react';
import PropTypes from 'prop-types';
import noPhoto from '../../images/placeholder.png';
import { ActorContainer } from './ActorStyled';

const Actor = ({ id, profile_path, name, character }) => {
  const photoUrl = profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : noPhoto;
  //   console.log(profile_path);
  return (
    <ActorContainer key={id}>
      <img className="actorPhoto" src={photoUrl} alt={name} width="100" />

      <p className="actorName">{name}</p>
      <p className="actorName">Character: {character}</p>
    </ActorContainer>
  );
};

Actor.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Actor;
