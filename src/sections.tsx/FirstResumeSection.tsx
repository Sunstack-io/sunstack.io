import React from "react";
import styled from "styled-components";

import PhoneCase from "../images/phone-1.png";
import { Container } from "../components/Container";

type Props = {};

export const FirstResumeSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <Rows>
          <LeftSection>
            <Title>
              Nous créons des projets <span>géniaux</span> sur mesure.
            </Title>
            <Text>
              Nous développons des applications mobiles <b>React-Native</b> sur
              mesure et de qualité industrielle.
              <br />
              <br /> Notre équipe d'experts a plus de 16 ans d'expérience dans
              le monde du développement logiciel, ainsi que 7 ans dédiés à
              React-Native et aux applications ReactJS.
              <br />
              <br />
              Nos ingénieurs contribuent régulièrement à l'Open-Source et
              maintiennent quelques-uns des packages React-Native les plus
              utilisés, cumulant plus d'1M de téléchargements mensuel.
            </Text>
          </LeftSection>
          <RightSection>
            <PhoneImg src={PhoneCase} />
          </RightSection>
        </Rows>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  padding-block: 80px;
`;
const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftSection = styled.div`
  max-width: 58%;
`;
const RightSection = styled.div``;

const Title = styled.h2`
  font-size: var(--title-size);
  line-height: 1;
  span {
    color: var(--main-color);
  }
`;
const Text = styled.p`
  font-size: var(--text-size);
  line-height: 1.5;
`;
const PhoneImg = styled.img`
  height: 560px;
`;
