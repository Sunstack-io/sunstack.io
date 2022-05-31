import React from "react";
import styled from "styled-components";

import LogoFullTransparent from "../images/logo_full_transparent.png";
import {
  mediaQueryTablet,
  avoidBlurryImages,
  mediaQueryMobile,
} from "../styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

export const Footer: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <MainContainer>
        <LogoImg src={LogoFullTransparent} />
        <MenuGrid>
          <Menu title={"Expertise"}>
            <MenuLink href="/#contact">React Native app development</MenuLink>
            <MenuLink href="/#contact">React development</MenuLink>
            <MenuLink href="/#contact">NodeJS development</MenuLink>
            <MenuLink href="/#contact">AWS Consulting</MenuLink>
            <MenuLink href="/#contact">NextJS development</MenuLink>
            <MenuLink href="/#contact">Mobile App development</MenuLink>
          </Menu>
          <Menu title={"Services"}>
            <MenuLink href="/#contact">App Development</MenuLink>
            <MenuLink href="/#contact">Mobile App Development</MenuLink>
            <MenuLink href="/#contact">React Native Training</MenuLink>
            <MenuLink href="/#contact">UX/UI Design</MenuLink>
            <MenuLink href="/#contact">Dedicated Development Team</MenuLink>
            <MenuLink href="/#contact">Software Engineering Audit</MenuLink>
          </Menu>
          <Menu title={"Find Us"}>
            <MenuLink href="https://www.linkedin.com/company/sunstack">
              LinkedIn
            </MenuLink>
            <MenuLink href="https://medium.com/sunstack">Medium</MenuLink>
            <MenuLink href="https://twitter.com/sunstackapps">Twitter</MenuLink>
            <MenuLink href="https://www.linkedin.com/company/sunstack">
              Company
            </MenuLink>
            <MenuLink href="/#contact">Contact Us</MenuLink>
            <MenuLink href="https://github.com/Sunstack-io">
              Open Source
            </MenuLink>
          </Menu>
        </MenuGrid>
        <Copyright>
          © 2022 Sunstack -{" "}
          <a href="mailto:hello@sunstack.io">hello@sunstack.io</a>
        </Copyright>
      </MainContainer>
    </Main>
  );
};

export const Menu: React.FC<{
  title: string;
}> = ({ title, children }) => {
  return (
    <MenuColumn>
      <MenuTitle>{title}</MenuTitle>
      <MenuColumnBody>{children}</MenuColumnBody>
    </MenuColumn>
  );
};
const Main = styled.footer`
  border-top: 1px solid #333;
  padding-block: 40px;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
`;
const LogoImg = styled.img`
  ${avoidBlurryImages()}

  height: 33px;
  ${mediaQueryTablet()} {
    height: 26px;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  margin-block: 40px;
  row-gap: 40px;

  grid-template-columns: repeat(2, 1fr);
  ${mediaQueryTablet()} {
    grid-template-columns: 1fr;
  }
`;

const MenuColumn = styled.div``;
const MenuTitle = styled.h6`
  margin: 0;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;

  margin-bottom: 12px;
`;
const MenuColumnBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8px;

  ${mediaQueryMobile()} {
    grid-template-columns: 1fr;
  }
`;
const MenuLink = styled.a`
  display: block;
  font-size: 1.8rem;

  color: #bbb;
  text-decoration: none;

  transition: color 0.2s;
  &:hover {
    color: white;
  }
`;

const Copyright = styled.p`
  margin: 0;
  margin-bottom: -20px;
`;
