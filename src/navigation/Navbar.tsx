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

export const Navbar: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <LogoImg src={LogoFullTransparent} />
      <MenuContainer>
        <ul>
          <li className="button">
            <a href="/#contact">{t("header-cta")}</a>
          </li>
        </ul>
      </MenuContainer>
    </Main>
  );
};

const Main = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-block: 30px;

  max-width: 1600px;
  padding-inline: 30px;
  margin: auto;
`;
const LogoImg = styled.img`
  ${avoidBlurryImages()}

  height: 32px;
  ${mediaQueryTablet()} {
    height: 26px;
  }
`;
const MenuContainer = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
  }
  li {
    display: block;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.6rem;

    display: flex;
    height: 40px;
    align-items: center;

    padding-inline: 20px;
    transition: all 0.2s;
  }
  .button a {
    border: 1px solid white;
    border-radius: 3px;
    &:hover {
      background-color: var(--main-color);
      border-color: var(--main-color);
      transform: translateY(-2px);
    }
  }

  ${mediaQueryMobile()} {
    display: none;
  }
`;
