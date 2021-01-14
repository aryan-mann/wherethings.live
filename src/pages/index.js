import React from "react";
import DefaultLayout from "../components/layout/default-layout";
import styled from "@emotion/styled";
import SnowGlobeSVG from "../assets/images/undraw_snow_globe.svg";
import tw from "twin.macro";

const ImageAndTitle = styled.div`
  ${tw`flex flex-col px-2 space-y-8 items-center py-8 md:py-16 justify-center`}
`;

export default function Homepage() {
  return (
    <DefaultLayout>
      <ImageAndTitle>
        <img tw="max-h-36 md:max-h-60 xl:max-h-80" src={SnowGlobeSVG} />
        <h2 tw="text-2xl md:text-3xl xl:text-4xl">
          Welcome to my Gatbsy site!
        </h2>
      </ImageAndTitle>
    </DefaultLayout>
  );
}
