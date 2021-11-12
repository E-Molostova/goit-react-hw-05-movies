import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  .navigationList {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationListItemLink {
    text-transform: uppercase;
    color: cornflowerblue;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
  }
  .navigationListItemLinkActive {
    color: red;
  }
`;
