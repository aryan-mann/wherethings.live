import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Footer = styled.footer`
  ${tw`px-4 md:px-8 py-2 md:py-4 text-center bg-gray-200`}
`;

export default function ({ ...props }) {
  const { title } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site?.siteMetadata;

  return (
    <Footer {...props}>
      Copyright &copy; {new Date().getFullYear()} | {title}
    </Footer>
  );
}
