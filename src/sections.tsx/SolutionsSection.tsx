import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { mediaQuerySmallTablet, mediaQueryMobile } from "../styles";

type Props = {};

export const SolutionsSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <Title>Nous avons des solutions.</Title>
        <SolutionGrid>
          <SolutionBlock title={"Ingénierie Logiciel"}>
            Epatez vos clients avec une application ajustée à vos besoins.
            Racontez-nous votre histoire et nous écrirons le livre.
          </SolutionBlock>
          <SolutionBlock title={"Développement MVP"}>
            Donnez vie à vos idées et validez vos hypothèses. C'est le meilleur
            moyen de lancer votre prochaine startup.
          </SolutionBlock>
          <SolutionBlock title={"Consulting"}>
            Nous regardons votre infrastructure logicielle en profondeur et
            suggérons des solutions techniques à vos problèmes.
          </SolutionBlock>
          <SolutionBlock title={"Mentorat"}>
            Investissez dans votre équipe et faites les monter en compétences
            afin qu'ils avancent encore plus vite et cassent encore plus de
            choses.
          </SolutionBlock>
          <SolutionBlock title={"Support à court-terme"}>
            Renforcez votre équipe avec nos développeurs pour combler vos
            besoins du moment.
          </SolutionBlock>
        </SolutionGrid>
      </Container>
    </Main>
  );
};

const SolutionBlock: React.FC<{ title: string; children: any }> = ({
  title,
  children,
}) => (
  <SolutionUI>
    <SolutionTitle>{title}</SolutionTitle>
    <SolutionText>{children}</SolutionText>
    <SolutionURL href="#">More</SolutionURL>
  </SolutionUI>
);

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Title = styled.h2`
  font-size: var(--title-size);
  line-height: 1;
  margin-bottom: var(--section-margin);
`;

const SolutionGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  ${mediaQueryMobile()} {
    grid-template-columns: 1fr;
  }
`;
const SolutionUI = styled.div`
  background: linear-gradient(to right bottom, #1e1e1e, #101010);
  padding: 40px 32px 24px 32px;
  display: flex;
  flex-direction: column;

  ${mediaQuerySmallTablet()} {
    padding: 20px 16px 8px 16px;
  }
`;
const SolutionTitle = styled.h4`
  margin: 0;
  margin-bottom: 12px;
  font-size: var(--small-title-size);
`;
const SolutionText = styled.p`
  margin: 0;
  margin-bottom: 28px;

  font-size: var(--regular-size);
  line-height: var(--text-line-height);
  flex: 1;
`;
const SolutionURL = styled.a`
  color: white;
  font-size: var(--small-size);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  display: inline-block;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
  }
`;
