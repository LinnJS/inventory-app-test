import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShareTray from 'components/shared/ShareTray';
import Card from 'components/shared/Card';
import { device, useOnClickOutside } from 'utils';

const PartCard = ({ part }) => {
  const { id, name, partNumber, cost } = part;
  const shareTrayRef = useRef();
  const [isTrayOpen, toggleTray] = useState(false);
  const [dynamicPartData, setDynamicPartData] = useState(null);

  console.log('dynamicPartData: ', dynamicPartData);

  useOnClickOutside(shareTrayRef, () => toggleTray(false));

  return (
    <PartContainer path={`part/${id}`} shareAction={toggleTray} isTrayOpen={isTrayOpen}>
      <div className="part-container">
        <div className="content-wrapper">
          <h2>{name}</h2>
          <span>{partNumber}</span>
          <p>{`$ ${cost}`}</p>
        </div>
      </div>

      {/* <div aria-hidden={!isTrayOpen} ref={shareTrayRef}>
        <ShareTray title="Quick add part" isTrayOpen={isTrayOpen} toggleTray={toggleTray} />
      </div> */}
    </PartContainer>
  );
};

export default PartCard;

const PartContainer = styled(Card)`
  margin-top: 20px;
  width: 100%;

  .part-container {
    display: flex;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 20px 24px;

    .content-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h2 {
        margin: 10px 0;
      }

      p {
        color: #666;
      }

      span {
        color: #666;
        margin-top: 8px;
      }
    }
  }

  .card-footer {
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    color: #031d42;

    .action-buttons {
      button {
        border-left: 1px solid #e8e8e8;
      }

      svg {
        color: #031d42;
      }
    }
  }

  @media (${device.tablet}) {
    max-width: 900px;
  }
`;
