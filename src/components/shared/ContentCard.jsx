import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Link } from 'primitives';

const ContentCard = ({ title, link, image, body }) => {
  return (
    <CardContainer>
      <Img className="image" fluid={image} />

      <div className="content-wrapper">
        <h2>{title}</h2>

        <p>{body}</p>

        {link && <Link path={link.path}>{link.label}</Link>}
      </div>
    </CardContainer>
  );
};

ContentCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.array,
  image: PropTypes.object,
  link: PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default ContentCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  margin-top: 20px;
  max-width: 1100px;

  .image {
    width: 100%;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 15px 25px 15px;
    height: 100%;
  }

  h2 {
    margin-top: 30px;
  }

  p {
    color: #595a5a;

    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
    margin: 10px 0 25px 0;
  }

  a {
    background-color: #1e74fd;
    border-radius: 6px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.12px;
    line-height: 18px;
    text-align: center;
    width: 120px;
    padding: 12px 14px;
  }
`;
