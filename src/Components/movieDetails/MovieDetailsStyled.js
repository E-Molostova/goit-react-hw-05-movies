import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  display: flex;

  .movieDescr {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .moviePoster {
  }
  .movieTitle {
    margin: 0;
  }
  .overviewTitle,
  .genresTitle {
    padding: 0;
    margin: 10px 0;
    font-weight: 700;
  }

  .overviewText {
    padding: 0;
    margin: 0;
  }

  .movieGenres {
    margin-right: 5px;
    font-weight: 400;
  }
`;
