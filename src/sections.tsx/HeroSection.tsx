import React from "react";
import styled from "styled-components";

import ReactIcon from "../images/react-icon-big.png";

import { Container } from "../components/Container";
import { Button } from "../components/Button";
import {
  breakPoints,
  mediaQuery,
  mediaQueryTablet,
  mediaQuerySmallTablet,
} from "../styles";

type Props = {};

export const HeroSection: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Main>
        <LeftSection>
          <SmallTitle>Vous l'imaginez,</SmallTitle>
          <BigTitle>Nous le rendons réel.</BigTitle>
          <Text>
            Nous sommes une équipe d'experts <b>React-Native</b> qui développons
            des applications mobiles full-stack depuis 2016, prêt à accueillir
            votre prochain projet.
          </Text>
          <CTAButton>Commencer un projet</CTAButton>
        </LeftSection>
        <RightSection>
          <ReactIconImg src={ReactIcon} />
        </RightSection>
      </Main>
    </Container>
  );
};

const Main = styled.div`
  height: 70vh;
  min-height: 500px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  ${mediaQuerySmallTablet()} {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;

    min-height: initial;
    height: initial;

    padding-block: 40px;
  }
`;

const LeftSection = styled.div`
  max-width: 60%;
  ${mediaQuerySmallTablet()} {
    max-width: initial;
  }
`;
const SmallTitle = styled.h1`
  font-size: var(--subhuge-title-size);
  font-weight: 400;
  line-height: 1;
  margin-bottom: 8px;
`;

const BigTitle = styled.h1`
  font-size: var(--huge-title-size);
  line-height: 0.9;

  display: block;
  margin-top: -8px;

  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: var(--text-size);
  margin-top: 0;
  margin-bottom: 36px;
  line-height: 1.3;
`;

const CTAButton = styled(Button)`
  margin-top: 0;
`;
const RightSection = styled.div`
  ${mediaQuerySmallTablet()} {
    display: none;
  }
`;
const ReactIconImg = styled.img`
  height: 290px;
  ${mediaQueryTablet()} {
    height: 200px;
  }
`;
