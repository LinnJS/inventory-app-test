import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import PartInfo from '../components/parts/components/PartInfo';
import Header from '../global/components/Header';
import PartDescription from '../components/parts/components/PartDescription';

export const query = graphql`
  query ($slug: String!) {
    part(id: { eq: $slug }) {
      name
      partNumber
      image
      cost
      description
    }

    file(name: { eq: "tools" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const PartDisplayPage = ({ data: { part, file } }) => {
  const { name, partNumber, image, cost, description } = part;
  const headerImg = getImage(file.childImageSharp);

  return (
    <PartWrapper>
      <Header backgroundImg={headerImg} />
      <PartInfo partNumber={partNumber} name={name} cost={cost} image={image} />
      <PartDescription description={description} />
    </PartWrapper>
  );
};

export default PartDisplayPage;

PartDisplayPage.propTypes = {
  data: PropTypes.shape({
    part: PropTypes.shape({
      name: PropTypes.string.isRequired,
      partNumber: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      image: PropTypes.string,
      description: PropTypes.string,
    }),
    file: PropTypes.object,
  }).isRequired,
};

const PartWrapper = styled.div`
  justify-content: flex-start;

  section {
    margin-top: 0px;
  }
`;
