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
    border-radius: 5px;
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

export const AdditionalContainer = styled.div`
  .addTitle {
    margin-left: 20px;
  }

  .addLink {
    text-decoration: none;
    margin-left: 20px;
  }
`;
