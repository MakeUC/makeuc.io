import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC } from 'react';

const HeaderImg: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header_retro.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default HeaderImg;
