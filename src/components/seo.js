import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export default function SEO({
  title = "Where Things Live",
  description = "A site documenting where things that cannot live, do live.",
  canonical = "",
  image,
}) {
  const site = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)?.site?.siteMetadata;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site?.siteUrl ?? "/"}${canonical}`} />
      <meta charSet="utf-8" />
    </Helmet>
  );
}
