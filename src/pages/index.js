import React from "react";
import DefaultLayout from "../components/layout/default-layout";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import tw from "twin.macro";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";

const ThingsHolder = styled.div`
  ${tw`w-full m-auto max-w-7xl`}
  ${tw`grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3`}
`;

const Thing = ({
  id,
  original,
  timestamp,
  caption,
  dimensions,
  children,
  ...rest
}) => {
  return (
    <Link
      to={`/thing/${timestamp}`}
      as="article"
      className="group"
      css={[tw`flex flex-col items-center justify-center`]}
      {...rest}
    >
      <img
        css={[
          tw`duration-1000 rounded shadow-xl cursor-pointer transform-gpu group-hover:scale-95 hover:shadow-2xl`,
        ]}
        width={dimensions?.width}
        height={dimensions?.height}
        src={original}
        alt={caption}
      />
    </Link>
  );
};

export default function Homepage() {
  const instaPosts = useStaticQuery(graphql`
    {
      allInstaNode {
        nodes {
          id
          original
          timestamp
          caption
          comments
          likes
          dimensions {
            width
            height
          }
        }
      }
    }
  `).allInstaNode.nodes.sort((x, y) => y.timestamp - x.timestamp);

  return (
    <DefaultLayout>
      <SEO />
      <ThingsHolder>{instaPosts?.map(Thing)}</ThingsHolder>
    </DefaultLayout>
  );
}
