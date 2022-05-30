import React from "react";
import styled from "styled-components";

import PhoneImg from "../images/phone-2.png";

import { Container } from "../components/Container";

type Props = {};

export const DemoSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <Title>Donnez-nous les grandes lignes, on se charge du reste.</Title>
        <Rows>
          <Column>
            <Block>
              <BlockTitle>Spécification</BlockTitle>
              <BlockText>
                Nous élaborons les détails techniques avec un focus sur la
                création d'un MVP.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Design</BlockTitle>
              <BlockText>
                Nous dessinons les wireframes de l'app et réalisons un
                prototype.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Architecture</BlockTitle>
              <BlockText>
                Nous planifions à l'avance les interactions entre les services
                pour permettre au projet de scale.
              </BlockText>
            </Block>
          </Column>
          <Column>
            <PhoneImgContainer src={PhoneImg} />
          </Column>
          <Column isRight={true}>
            <Block>
              <BlockTitle>Développement</BlockTitle>
              <BlockText>
                Nous codons l'application en agile avec un premier livrable
                interne le plus tôt possible.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Livraison</BlockTitle>
              <BlockText>
                Nous créons une pipeline pour déployer votre application dans
                les meilleurs délais.
              </BlockText>
            </Block>
            <Block>
              <BlockTitle>Maintenance</BlockTitle>
              <BlockText>
                Nous gardons un oeil sur les core health metrics et agissons en
                cas d'urgence.
              </BlockText>
            </Block>
          </Column>
        </Rows>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  margin-block: 160px;
`;
const Title = styled.h1`
  font-size: var(--title-size);
  line-height: 1;
  max-width: 700px;
`;

const Rows = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
`;

const Column = styled.div<{ isRight?: boolean }>`
  flex: 1;

  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:is(:last-child) {
    h4,
    p {
      text-align: right;
    }
  }
`;

const Block = styled.div`
  margin-bottom: 30px;
`;
const BlockTitle = styled.h4`
  font-size: 2.8rem;
  margin: 0;
  margin-bottom: 8px;
`;
const BlockText = styled.p`
  font-size: 2.2rem;
  margin: 0;
`;
const PhoneImgContainer = styled.img`
  display: block;
  height: 560px;
`;
