import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlaceHolder = ({ heading, image, subHeading }) => {
  return (
    <PlaceholderContainer>
      {image}

      {heading && <h2>{heading}</h2>}
      {subHeading && <h3>{subHeading}</h3>}
    </PlaceholderContainer>
  );
};

export default PlaceHolder;

PlaceHolder.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  subHeading: PropTypes.string,
};

const PlaceholderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  svg {
    margin-bottom: 50px;
    width: 100%;
    height: 325px;
  }

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    color: #909090;
  }
`;
