import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import { NavigationContainer } from './NavigationStyled';

const Navigation = ({ match = '' }) => {
  return (
    <>
      <NavigationContainer>
        <ul className="navigationList">
          {mainRoutes.map(route => (
            <li key={route.path} className="navigationListItem">
              <NavLink
                exact={route.exact}
                to={match + route.path}
                className="navigationListItemLink"
                activeClassName="navigationListItemLinkActive"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
