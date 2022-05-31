import React from "react";
import styled from "styled-components";

import ExpoIcon from "../images/tools/expo-icon.png";
import ReactIcon from "../images/tools/react-icon.png";
import RNIcon from "../images/tools/rn-icon.png";
import GraphQLIcon from "../images/tools/graphql-icon.png";
import TSIcon from "../images/tools/typescript-icon.png";
import ReduxIcon from "../images/tools/redux-icon.png";

import { Container } from "../components/Container";
import { mediaQueryMobile, mediaQuerySmallTablet } from "../styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

export const ToolsSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main>
      <Container>
        <Title>{t("tools-title")}</Title>
        <IconGrid>
          <IconSet img={ReactIcon} title={"React"} subtitle={"Platform"} />
          <IconSet img={RNIcon} title={"React-Native"} subtitle={"Platform"} />
          <IconSet img={ExpoIcon} title={"Expo"} subtitle={"SDK"} />
          <IconSet
            img={ReduxIcon}
            title={"Redux"}
            subtitle={"State management"}
          />
          <IconSet
            img={GraphQLIcon}
            title={"GraphQL"}
            subtitle={"Networking"}
          />
          <IconSet img={TSIcon} title={"Typescript"} subtitle={"Language"} />
        </IconGrid>
      </Container>
    </Main>
  );
};

export const IconSet: React.FC<{
  img: string;
  title: string;
  subtitle: string;
}> = ({ img, title, subtitle }) => (
  <IconContainer>
    <IconImg src={img} />
    <IconTitle>{title}</IconTitle>
    <IconSubtitle>{subtitle}</IconSubtitle>
  </IconContainer>
);

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Title = styled.h2`
  font-size: var(--title-size);
  margin-bottom: var(--section-margin);
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;

  ${mediaQuerySmallTablet()} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQueryMobile()} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const IconContainer = styled.div``;
const IconImg = styled.img`
  height: 80px;
  margin-bottom: 16px;
`;
const IconTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  font-size: 2.6rem;

  ${mediaQuerySmallTablet()} {
    font-size: 2.2rem;
  }
`;
const IconSubtitle = styled.h6`
  text-transform: uppercase;
  margin: 0;
  color: #cecece;
  font-size: 1.6rem;
  font-weight: 400;
`;
