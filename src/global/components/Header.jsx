import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { convertToBgImage } from 'gbimage-bridge';

const Header = ({ children, backgroundImg }) => {
  const img = convertToBgImage(backgroundImg);
  return (
    <HeaderContainer>
      <Img className="header-image" {...img}>
        {children}
      </Img>
    </HeaderContainer>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  backgroundImg: PropTypes.any,
};

export default Header;

const HeaderContainer = styled.div`
  background: #f5f5f5;
  height: 400px;
  overflow: hidden;

  .header-image {
    background-color: #fefefa;
    border-bottom: lightgrey solid 1.4px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 25px 15px 25px;
    position: relative;
    width: 100%;
    height: 500px;

    h1 {
      margin-bottom: 10px;
      text-transform: capitalize;
    }
  }
`;
