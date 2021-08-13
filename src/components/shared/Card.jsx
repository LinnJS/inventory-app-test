import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, Link } from 'primitives';

const Card = ({ children, heading, path, shareAction, isTrayOpen, ...rest }) => {
  return (
    <CardContainer {...rest}>
      {heading && (
        <div className="card-header">
          <h2>{heading} </h2>
        </div>
      )}

      {children}

      <div className="card-footer">
        <Link className="link" path={path}>
          <span>Part details</span>
        </Link>

        <div className="action-buttons">
          <button onClick={() => shareAction(!isTrayOpen)} type="button" aria-label="Open social media share tray">
            <Icon height={20} width={20} name="plus" />
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  heading: PropTypes.string,
  path: PropTypes.string,
  infoLink: PropTypes.object,
  shareAction: PropTypes.func,
  isTrayOpen: PropTypes.bool,
};

export default Card;

const CardContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  background-color: #031d42;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);

  .card-header {
    background-color: #0d75c9;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-weight: 600;

    svg {
      margin-left: 15px;
    }
  }

  .card-footer {
    align-items: center;
    border-top: 1px solid #ffffff;
    display: flex;
    height: 45px;
    justify-content: space-between;
    width: 100%;

    .link {
      display: flex;
      justify-content: flex-start;
      padding-left: 16px;
      width: 100%;
    }

    .action-buttons {
      display: flex;
      height: 100%;

      svg {
        color: white;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        background-color: transparent;
        border-left: 1px solid #ffffff;
      }
    }

    a {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
    }
  }
`;
