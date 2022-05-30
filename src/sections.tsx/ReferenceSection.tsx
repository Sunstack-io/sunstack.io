import React from "react";
import styled from "styled-components";

import CaptainFisherIcon from "../images/captainfisher-icon.png";
import WanderersIcon from "../images/wanderers-icon.png";
import WekoloIcon from "../images/wekolo-icon.png";
import BelibIcon from "../images/belib-icon.png";

import { Container } from "../components/Container";

type Props = {};

export const ReferenceSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <Title>Notre passion : créer de superbes apps</Title>
      </Container>

      <ImgContainer>
        <ImgTag src={CaptainFisherIcon} />
        <ImgTag src={WanderersIcon} />
        <ImgTag src={WekoloIcon} />
        <ImgTag src={BelibIcon} />
      </ImgContainer>
    </Main>
  );
};

const Main = styled.div`
  background-color: #131313;
  padding-block: 60px;
`;
const Title = styled.h2`
  text-transform: uppercase;
  margin: auto;
  width: fit-content;
  font-size: 3rem;
`;
const ImgContainer = styled.div`
  width: fit-content;
  margin-inline: auto;
  margin-top: 40px;
`;
const ImgTag = styled.img`
  display: inline-block;
  height: 70px;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
