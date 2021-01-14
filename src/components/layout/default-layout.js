import React from "react";
import tw, { GlobalStyles } from "twin.macro";
import Footer from "./footer";
import Header from "./header";
import styled from "@emotion/styled";

const Main = styled.main`
  ${tw`px-1 sm:px-2 md:px-4`}
`;

const App = styled.div`
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  min-height: 100vh;
`;

export default function DefaultLayout({ children }) {
  return (
    <App>
      <GlobalStyles />
      <Header />
      <Main id="default-content">{children}</Main>
      <Footer />
    </App>
  );
}
