import * as React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { FunText, MainText, Title } from "../components/HomeComponents";

const Main = styled.main`
  background-color: black;
  color: white;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  font-family: "Source Sans Pro", serif;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => {
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
      <div>
        <Title>
          <span>Sun</span>stack
        </Title>
        <MainText>On arrive.</MainText>
      </div>

      <FunText>On se refait juste une beauté.</FunText>
    </Main>
  );
};

export default IndexPage;
