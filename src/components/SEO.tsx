import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

const SEO: FC = () => {
  const { site } = useStaticQuery(query);

  const { title, description } = site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173527139-1" />
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-173527139-1');
      `}
      </script>
      <html lang="en" />
    </Helmet>
  );
};
export default SEO;
