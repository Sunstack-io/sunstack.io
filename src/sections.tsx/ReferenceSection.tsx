import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useInView } from "react-intersection-observer";

import CaptainFisherIcon from "../images/captainfisher-icon.png";
import WanderersIcon from "../images/wanderers-icon.png";
import WekoloIcon from "../images/wekolo-icon.png";
import BelibIcon from "../images/belib-icon.png";

import { Container } from "../components/Container";
import { mediaQueryMobile, mediaQuerySmallTablet } from "../styles";

type Props = {};

export const ReferenceSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();

  return (
    <Main ref={ref}>
      <Container>
        <Title>{t("ref-title")}</Title>
      </Container>

      <ImgContainer>
        <ImgTag src={WekoloIcon} />
        <ImgTag src={WanderersIcon} />
        <ImgTag src={BelibIcon} />
        <ImgTag src={CaptainFisherIcon} />
      </ImgContainer>
    </Main>
  );
};

const Main = styled.div`
  background: linear-gradient(to bottom, #0a0a0a, #101010);
  margin-bottom: var(--section-margin);

  padding-top: calc(var(--section-margin) + 30px);
  padding-bottom: calc(var(--section-margin) + 30px);
`;
const Title = styled.h2`
  text-transform: uppercase;
  margin: auto;
  text-align: center;

  width: fit-content;
  font-size: 4rem;
`;
const ImgContainer = styled.div`
  width: fit-content;
  margin-inline: auto;
  margin-top: 60px;

  padding-inline: 80px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-bottom: -40px;

  ${mediaQuerySmallTablet()} {
    padding-inline: initial;
  }
  ${mediaQueryMobile()} {
    flex-direction: column;
    margin-bottom: -30px;
    width: initial;
  }
`;
const ImgTag = styled.img`
  display: block;
  height: 62px;
  margin-bottom: 30px;

  &:not(:last-child) {
    padding-right: 40px;
  }

  ${mediaQueryMobile()} {
    margin-bottom: 30px;
    height: 57px;

    &:not(:last-child) {
      padding-right: 0;
    }
  }
`;
