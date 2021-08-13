import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PartDescription = ({ description }) => {
  return (
    <DescriptionContainer>
      <h2>Part Description</h2>

      <p>{description}</p>
    </DescriptionContainer>
  );
};

PartDescription.propTypes = {
  description: PropTypes.string,
};

export default PartDescription;

const DescriptionContainer = styled.section`
  padding: 15px 0;
  background-color: #fff;
  width: 100%;
  height: 100%;

  h2 {
    border-bottom: 1px dashed #e6e8ed;
    border-top: 1px dashed #e6e8ed;
    padding: 20px 30px;
  }

  p {
    display: flex;
    flex-direction: column;
    padding: 10px 30px 20px 30px;
  }
`;
