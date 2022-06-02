import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import ReactIcon from "../images/react-icon-big.png";
import Motherboard from "../images/motherboard.png";

import { Container } from "../components/Container";
import { LinkButton } from "../components/Button";
import { mediaQueryTablet, mediaQuerySmallTablet } from "../styles";

type Props = {};

export const HeroSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main>
      <Overlay />
      <Content>
        <Container>
          <InnerMain>
            <LeftSection>
              <BigTitle>{t("hero-bigTitle")}</BigTitle>
              <Text dangerouslySetInnerHTML={{ __html: t("hero-text") }} />
              <CTAButton href="#contact">{t("hero-cta")}</CTAButton>
            </LeftSection>
            <RightSection>
              <ReactIconImg src={ReactIcon} />
            </RightSection>
          </InnerMain>
        </Container>
      </Content>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  height: 85vh;
  min-height: 500px;

  background-image: url(${Motherboard});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  ${mediaQuerySmallTablet()} {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;

    padding-block: 40px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding-top: 40px;
`;

const InnerMain = styled.div`
  height: 85vh;
  min-height: 500px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;
const LeftSection = styled.div`
  max-width: 60%;
  ${mediaQuerySmallTablet()} {
    max-width: initial;
  }
`;
const BigTitle = styled.h1`
  font-size: var(--huge-title-size);
  line-height: 1;

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

const CTAButton = styled(LinkButton)`
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
