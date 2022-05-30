import React from "react";
import styled from "styled-components";

import ReactIcon from "../images/react-icon-big.png";

import { Container } from "../components/Container";
import { Button } from "../components/Button";

type Props = {};

export const HeroSection: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Main>
        <LeftSection>
          <Title>
            Vous l'imaginez,
            <strong>Nous le rendons réel.</strong>
          </Title>
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
  height: 60vh;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  max-width: 60%;
`;
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  strong {
    font-size: 6rem;
    display: block;
    margin-top: -8px;
  }

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
const RightSection = styled.div``;
const ReactIconImg = styled.img`
  height: 290px;
`;
