import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';

import Page from 'global/components/Page';
import Header from 'global/components/Header';
import ContentCard from 'components/shared/ContentCard';

export const query = graphql`
  query LandingQuery {
    file(name: { eq: "jet-parked" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const LandingPage = ({ data }) => {
  const headerImg = getImage(data.file.childImageSharp);

  return (
    <>
      <Header backgroundImg={headerImg} />
    </>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({ cultureCards: PropTypes.object, nextEvent: PropTypes.object, file: PropTypes.any }),
};

export default LandingPage;
