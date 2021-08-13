import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';

import { Icon, Link } from 'primitives';
import { getCurrentPath, isInstalled, device } from 'utils';

const Navigation = () => {
  const location = useLocation();
  const currentPath = getCurrentPath(location);

  return (
    <NavigationContainer isInstalled={isInstalled}>
      <NavItem isActive={currentPath === 'home'} className="tab">
        <Link path="/" direction="left">
          <Icon name="home" height={25} width={25} />
          <span>Home</span>
        </Link>
      </NavItem>

      <NavItem isActive={currentPath === 'parts'} className="tab">
        <Link path="order" direction="left">
          <Icon name="parts" height={20} width={20} />
          <span>Order</span>
        </Link>
      </NavItem>

      <NavItem isActive={currentPath === 'parts'} className="tab">
        <Link path="checkout" direction="left">
          <Icon name="add-user" height={20} width={20} />
          <span>Checkout</span>
        </Link>
      </NavItem>
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled.nav`
  background-color: #f8f8ff;
  border-top: lightgrey solid 1.4px;
  bottom: 0;
  display: flex;
  height: ${({ isInstalled }) => (isInstalled ? '85px' : '65px')};
  justify-content: space-between;
  padding: 0 30px ${({ isInstalled }) => (isInstalled ? '20px' : '0px')};
  position: fixed;
  width: 100%;
  z-index: 10;

  @media (${device.tablet}) {
    align-items: center;
    border-right: lightgrey solid 1.4px;
    border-top: none;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    left: 0;
    padding: 60px 0 0 0;
    width: 85px;
    position: fixed;
  }
`;

const NavItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  height: 100%;
  justify-content: center;
  width: 64px;

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  svg {
    margin-bottom: 5px;
    color: ${({ isActive }) => (isActive ? '#00ADEE' : '#000000')};
  }

  span {
    color: ${({ isActive }) => (isActive ? '#00ADEE' : '#000000')};
  }

  @media (${device.tablet}) {
    height: 80px;
    margin-top: 20px;
  }
`;
