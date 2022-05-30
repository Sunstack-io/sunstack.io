import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Main>
      <Helmet>
        <title>Sunstack | Applications Mobiles, Experts en React-Native</title>
        <link rel="canonical" href="https://sunstack.io/" />
        <meta
          name="description"
          content="Nous sommes une équipe d'experts en application mobiles via React-Native. Nous créons des MVPs, Applications Mobiles, offrons du Mentorat, de la Formation et de l'Assistance ponctuelle."
        />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:creator" content="@ancyrweb" />
        <meta
          name="og:title"
          content="Sunstack | Applications Mobiles, Experts en React-Native"
        />
        <meta name="og:url" content="https://sunstack.io" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="fr" />
        <meta
          name="og:image"
          content="https://sunstack.s3.eu-west-3.amazonaws.com/public/og.png"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  color: white;

  font-family: "Source Sans Pro", serif;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;

  --main-color: #cf2d00;
  --title-size: 4.6rem;
  --text-size: 2.4rem;

  b {
    font-weight: 600;
    color: #ffffff;
  }
  a {
    color: white;
  }
`;
