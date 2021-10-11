import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './GoBackStyled';

const GoBackButton = ({ onGoBack }) => {
  return (
    <ButtonContainer type="button" onClick={onGoBack}>
      Go back
    </ButtonContainer>
  );
};

GoBackButton.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default GoBackButton;
