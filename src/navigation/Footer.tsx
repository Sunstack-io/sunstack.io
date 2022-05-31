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
      <LogoImg src={LogoFullTransparent} />
      <MenuContainer>
        <ul>
          <li>
            <a href="#">{t("about")}</a>
          </li>
        </ul>
      </MenuContainer>
    </Main>
  );
};

const Main = styled.footer`
  border-top: 1px solid #333;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-block: 16px;
  padding-inline: 30px;
`;
const LogoImg = styled.img`
  ${avoidBlurryImages()}

  height: 33px;
  ${mediaQueryTablet()} {
    height: 26px;
  }
`;
const MenuContainer = styled.div`
  ul {
    list-style-type: none;
    display: flex;
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
    font-weight: 400;

    display: flex;
    align-items: center;

    padding-inline: 20px;
    font-size: var(--regular-size);
  }

  ${mediaQueryMobile()} {
    display: none;
  }
`;
