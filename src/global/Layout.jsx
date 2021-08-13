import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import theme from 'global/theme';
import { device } from 'utils';

const Layout = ({ children }) => {
  const [isLightTheme] = useState(true);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>

      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <GlobalStyle />
        <LayoutWrapper>
          {children}
          <Navigation />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 65px;
  background-color: #f5f5f5;

  @media (${device.tablet}) {
    padding-left: 85px;
    padding-bottom: 0;
  }
`;
