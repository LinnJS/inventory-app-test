import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from 'primitives';

const PartInfo = ({ name, cost, partNumber, image }) => {
  return (
    <InfoContainer>
      <div className="header">
        <img src={image} alt={`${name} part`} />
        <div className="wrapper">
          <h1>{name}</h1>

          <p>{partNumber}</p>
        </div>
      </div>

      <div className="link-group">
        <div>
          <Icon name="money" width={20} height={20} />
          <span>{cost}</span>
        </div>
      </div>
    </InfoContainer>
  );
};

PartInfo.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.number,
  partNumber: PropTypes.string,
  image: PropTypes.string,
};

export default PartInfo;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 15px;
  width: 100%;

  .header {
    border-bottom: 1px dashed #e6e8ed;
    padding: 15px 30px 15px 30px;
    display: flex;

    img {
      width: 200px;
    }

    .wrapper {
      align-self: center;
      margin-left: 1em;

      h2 {
        font-size: 24px;
      }

      p {
        margin: 10px 0;
        color: #717171;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  .link-group {
    padding: 15px 30px 30px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      align-items: center;
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      font-size: 12px;
    }

    svg {
      margin-right: 10px;
      color: #031d42;
    }
  }
`;
