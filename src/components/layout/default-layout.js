import React from "react";
import { GlobalStyles } from "twin.macro";
import Footer from "./footer";
import Header from "./header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main id="default-content">{children}</main>
      <Footer />
    </>
  );
}
