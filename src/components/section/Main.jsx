import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />
      <main id="main" role="main">
        <Banner />
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
