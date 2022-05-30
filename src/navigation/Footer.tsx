import React from "react";
import styled from "styled-components";

import LogoFullTransparent from "../images/logo_full_transparent.png";

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <Main>
      <LogoImg src={LogoFullTransparent} />
      <MenuContainer>
        <ul>
          <li>
            <a href="#">A propos</a>
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
  height: 33px;
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
    font-size: 2rem;
  }
`;
