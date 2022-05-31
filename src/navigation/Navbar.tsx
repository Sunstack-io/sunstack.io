import React from "react";
import styled from "styled-components";

import LogoFullTransparent from "../images/logo_full_transparent.png";
import { mediaQueryTablet, avoidBlurryImages } from "../styles";

type Props = {};

export const Navbar: React.FC<Props> = () => {
  return (
    <Main>
      <LogoImg src={LogoFullTransparent} />
      <MenuContainer>
        <ul>
          <li>
            <a href="#">A propos</a>
          </li>
          <li className="button">
            <a href="#">Commencer un projet</a>
          </li>
        </ul>
      </MenuContainer>
    </Main>
  );
};

const Main = styled.nav`
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

  ${mediaQueryTablet()} {
    display: none;
  }
`;
