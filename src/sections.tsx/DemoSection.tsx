import React from "react";
import styled from "styled-components";

import PhoneImg from "../images/phone-2.png";

import { Container } from "../components/Container";
import { mediaQuerySmallTablet, mediaQueryTablet } from "../styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

const elements = [null, null, null];

export const DemoSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main>
      <Container>
        <Title>{t("demo-title")}</Title>
        <Rows>
          <Column>
            {elements.map((_, i) => (
              <Block>
                <BlockTitle>{t("demo-" + (i + 1) + "-title")}</BlockTitle>
                <BlockText>{t("demo-" + (i + 1) + "-text")}</BlockText>
              </Block>
            ))}
          </Column>
          <Column>
            <PhoneImgContainer src={PhoneImg} />
          </Column>
          <Column isRight={true}>
            {elements.map((_, i) => (
              <Block>
                <BlockTitle>{t("demo-" + (i + 4) + "-title")}</BlockTitle>
                <BlockText>{t("demo-" + (i + 4) + "-text")}</BlockText>
              </Block>
            ))}
          </Column>
        </Rows>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Title = styled.h1`
  font-size: var(--title-size);
  line-height: 1;
  max-width: 700px;
`;

const Rows = styled.div`
  display: flex;
  margin-top: var(--section-margin);
  align-items: center;

  ${mediaQuerySmallTablet()} {
    flex-direction: column;
  }
`;

const Column = styled.div<{ isRight?: boolean }>`
  flex: 1;

  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:is(:last-child) {
    margin-left: 20px;
    h4,
    p {
      text-align: right;
    }
  }
  &:is(:first-child) {
    margin-right: 20px;
  }

  ${mediaQuerySmallTablet()} {
    &:is(:last-child) {
      margin-left: initial;
      h4,
      p {
        text-align: initial;
      }
    }

    &:nth-child(2) {
      margin-top: var(--section-margin);
      order: 3;
    }
  }
`;

const Block = styled.div`
  margin-bottom: 30px;
`;
const BlockTitle = styled.h4`
  font-size: var(--small-title-size);
  margin: 0;
  margin-bottom: 8px;

  ${mediaQuerySmallTablet()} {
    font-size: 2.8rem;
    margin-bottom: 4px;
  }
`;
const BlockText = styled.p`
  font-size: var(--regular-size);
  margin: 0;

  ${mediaQuerySmallTablet()} {
    font-size: var(--text-size);
  }
`;
const PhoneImgContainer = styled.img`
  display: block;
  height: 560px;
  ${mediaQueryTablet()} {
    height: 430px;
  }
`;
