import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import { Icon } from 'primitives';
import { device, useWindowSize } from 'utils';

const ShareTray = ({ title, isTrayOpen, toggleTray, ...rest }) => {
  const windowSize = useWindowSize();
  const isTabletSize = windowSize.width > 768;
  const trayHeight = !isTabletSize ? '65px' : '0';
  const trayAnimation = useSpring({
    bottom: isTrayOpen ? `${trayHeight}` : '-500px',
  });

  return (
    <ShareContainer style={trayAnimation} {...rest}>
      <div className="header">
        <h2 className="header-title">{title}</h2>

        <button onClick={() => toggleTray(!isTrayOpen)} aria-label="Opens quick add tray" type="button">
          <Icon height={25} width={25} name="close" />
        </button>
      </div>

      <div className="link-group">
        <p>actions go here</p>
      </div>
    </ShareContainer>
  );
};

ShareTray.propTypes = {
  className: PropTypes.string,
  isTrayOpen: PropTypes.bool,
  shareDescription: PropTypes.string,
  shareTitle: PropTypes.string,
  shareURL: PropTypes.string,
  title: PropTypes.string,
  toggleTray: PropTypes.func,
};

const ShareContainer = styled(animated.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-top: solid 1px lightgrey;
  border-left: solid 1px lightgrey;
  border-right: solid 1px lightgrey;
  border-radius: 5px 5px 0 0;
  position: fixed;
  bottom: 65px;
  width: 100%;
  padding: 20px;
  left: 0;
  right: 0;

  svg {
    max-height: 45px;
  }

  .header {
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
    justify-content: space-between;
    border-bottom: lightgrey 1px dashed;
    padding-bottom: 20px;
    margin-bottom: 20px;

    h2 {
      width: 100%;
      color: black;
    }

    button {
      color: black;
      background-color: transparent;
    }
  }

  .link-group {
    display: flex;
    width: 100%;
  }

  @media (${device.tablet}) {
    margin-left: 85px;
    width: calc(100% - 85px);
  }
`;

export default ShareTray;
