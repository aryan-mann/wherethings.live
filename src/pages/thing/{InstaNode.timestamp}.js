import React from "react";
// import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import DefaultLayout from "../../components/layout/default-layout";
import { Link, graphql } from "gatsby";
import SEO from "../../components/seo";

const ThingHolder = styled.div`
  ${tw`w-full max-w-6xl py-8 m-auto sm:py-12 md:py-24`}
`;

const Thing = styled.article`
  ${tw`flex flex-col items-center justify-center space-x-8 space-y-2 font-bold sm:space-y-8 lg:flex-row`}
`;

// animation: ${IdleAnimation} 3s ease-in-out 0s infinite alternate;
// const IdleAnimation = keyframes`
//   0% {
//     transform: skewX(-0.5deg) rotateZ(-0.5deg) rotateX(1deg);
//   }
//   100% {
//     transform: skewX(0.5deg) rotateZ(0.5deg) rotateX(-1deg);
//   }
// `;

const ThingPicture = styled.img`
  ${tw`max-w-sm rounded shadow-xl transform-gpu`}
`;

const ThingDetails = styled.div`
  ${tw`flex flex-col max-w-xl px-1 py-8 space-y-4`}
`;

const ThingDetail = styled.p`
  ${tw`text-2xl`}
`;

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
            <p css={{ fontSize: 24 }}>Hello</p>
            {/*
            tw`mb-8 text-2xl font-bold md:text-3xl`
            <ThingDetail>
              <span role="img" aria-label="clock">
                🕒
              </span>{" "}
              {postDate.toLocaleString(undefined, dateFormat)}
            </ThingDetail>
            <ThingDetail>
              <span role="img" aria-label="heart">
                💖
              </span>
              {likes} //{" "}
              <span role="img" aria-label="microphone">
                🎤
              </span>{" "}
              {comments}
            </ThingDetail>
            <ThingDetail css={[tw`flex justify-end w-full`]}> */}
            {/* <Link
                css={tw`px-2 py-2 mt-4 mr-2 text-xl transition bg-black bg-opacity-0 hover:shadow hover:bg-opacity-10`}
                to={"/"}
              > 
                Go Back 🏠
               </Link> */}
            {/* </ThingDetail> */}
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
