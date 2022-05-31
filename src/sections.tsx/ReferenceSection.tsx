import React from "react";
import styled from "styled-components";

import CaptainFisherIcon from "../images/captainfisher-icon.png";
import WanderersIcon from "../images/wanderers-icon.png";
import WekoloIcon from "../images/wekolo-icon.png";
import BelibIcon from "../images/belib-icon.png";

import { Container } from "../components/Container";
import { mediaQueryMobile, mediaQuerySmallTablet } from "../styles";

type Props = {};

export const ReferenceSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <Title>Notre passion : créer de superbes apps</Title>
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
  background-color: #131313;
  padding-block: var(--section-margin);
  margin-block: var(--section-margin);
`;
const Title = styled.h2`
  text-transform: uppercase;
  margin: auto;
  text-align: center;

  width: fit-content;
  font-size: 3rem;
`;
const ImgContainer = styled.div`
  width: fit-content;
  margin-inline: auto;
  margin-top: 40px;

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
