import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import DefaultLayout from "../../components/layout/default-layout";
import { Link } from "gatsby";
import SEO from "../../components/seo";

const ThingHolder = styled.div`
  ${tw`w-full max-w-6xl py-8 m-auto sm:py-12 md:py-24`}
`;

const Thing = styled.article`
  ${tw`flex flex-col items-center justify-center space-x-8 space-y-2 font-bold sm:space-y-8 lg:flex-row`}
`;

const IdleAnimation = keyframes`
  0% {
    transform: skewX(-0.5deg) rotateZ(-0.5deg) rotateX(1deg);
  }
  100% {
    transform: skewX(0.5deg) rotateZ(0.5deg) rotateX(-1deg);
  }
`;

const ThingPicture = styled.img`
  ${tw`max-w-sm rounded shadow-xl transform-gpu`}
  animation: ${IdleAnimation} 3s ease-in-out 0s infinite alternate;
`;

const ThingDetails = styled.div`
  ${tw`flex flex-col max-w-xl px-1 py-8 space-y-4`}
`;

const ThingDetail = ({ what, children, ...rest }) => {
  return (
    <p css={[tw`text-2xl`]} {...rest}>
      {what && <b>{what} </b>}
      {children}
    </p>
  );
};

const dateFormat = { year: "numeric", month: "long", day: "numeric" };

export default function ({ data }) {
  const {
    original,
    timestamp,
    caption,
    dimensions,
    comments,
    likes,
  } = data.instaNode;

  const postDate = new Date(timestamp * 1000);

  return (
    <DefaultLayout>
      <SEO
        title={`Thing from ${postDate
          .toLocaleString(undefined, dateFormat)
          .slice(0, -4)} | Where Things Live`}
        canonical={timestamp}
      />
      <ThingHolder>
        <Thing>
          <ThingPicture
            width={dimensions?.width}
            height={dimensions?.height}
            src={original}
          />
          <ThingDetails>
            <ThingDetail tw="mb-8 font-bold text-2xl md:text-3xl">
              {caption}
            </ThingDetail>
            <ThingDetail>
              🕒 {postDate.toLocaleString(undefined, dateFormat)}
            </ThingDetail>
            <ThingDetail>
              💖{likes} // 🎤 {comments}
            </ThingDetail>
            <ThingDetail css={[tw`flex justify-end w-full`]}>
              <Link
                tw="text-xl hover:shadow py-2 px-2 mr-2 mt-4 bg-black bg-opacity-0 transition hover:bg-opacity-10"
                to={"/"}
              >
                Go Back 🏠
              </Link>
            </ThingDetail>
          </ThingDetails>
        </Thing>
      </ThingHolder>
    </DefaultLayout>
  );
}

export const query = graphql`
  query($id: String) {
    instaNode(id: { eq: $id }) {
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
`;
