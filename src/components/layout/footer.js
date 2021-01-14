import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Footer = styled.footer`
  ${tw`w-full px-4 pb-8 text-sm text-center text-white bg-transparent md:px-8 md:pt-16`}
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
      Copyright &copy; {new Date().getFullYear()} / {title}
    </Footer>
  );
}
