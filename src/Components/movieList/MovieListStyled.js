import styled from 'styled-components';

export const MovieListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: baseline;

  .movieListTitle {
    margin-top: 0;
  }

  .movieItem {
    max-width: 300px;
    margin-left: 30px;
    margin-bottom: 30px;
    flex-basis: calc((100%) - 60px);
  }

  .movieImg {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .movieTitle {
    font-size: 16px;
    line-height: 1.16;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    color: #af1e1e;
  }
`;
