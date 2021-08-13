import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Page from 'global/components/Page';
import Header from 'global/components/Header';
import PartCard from 'components/parts/PartCard';

export const query = graphql`
  query OrderDetailsQuery {
    allPart {
      nodes {
        id
        name
        cost
        partNumber
      }
    }

    file(name: { eq: "order" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const PartDetailsPage = ({ data: { file, allPart } }) => {
  const headerImg = getImage(file.childImageSharp);
  const parts = allPart.nodes;

  return (
    <>
      <Header backgroundImg={headerImg} />
      <Page>{parts.length > 0 && parts.map((part) => <PartCard key={part.id} part={part} />)}</Page>
    </>
  );
};

PartDetailsPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object.isRequired,
    allPart: PropTypes.shape({ nodes: PropTypes.array }),
  }),
};

export default PartDetailsPage;
