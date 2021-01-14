import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { StaticImage } from "gatsby-plugin-image";
import routes from "../../routes";

const Wrapper = styled.header`
  ${tw`px-4 py-2 md:py-4 bg-gray-200`}
`;
const Container = styled.div`
  ${tw`flex max-w-5xl m-auto`}
`;
const Items = styled.div`
  ${tw`flex px-2 flex-grow items-center justify-end space-x-4`}
`;
const Item = styled(Link)`
  ${tw`px-4 py-2 bg-white rounded shadow hover:shadow-none active:shadow-inner`}
`;

export default function ({ ...props }) {
  return (
    <Wrapper {...props}>
      <Container>
        <Link to={routes?.TopNavigationBar?.Home ?? "/"}>
          <StaticImage
            css={tw`transform-gpu duration-500 hover:-rotate-12`}
            src="../../assets/images/icon.png"
            layout="fixed"
            placeholder="tracedSVG"
            width={50}
          />
        </Link>
        <Items>
          {Object.entries(routes?.TopNavigationBar)?.map(([name, url]) => (
            <Item to={url}>{name}</Item>
          ))}
        </Items>
      </Container>
    </Wrapper>
  );
}
