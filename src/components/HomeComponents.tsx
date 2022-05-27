import styled from "styled-components";
import { mediaQuery } from "../styles";

export const Title = styled.h1`
  font-family: Raleway, serif;
  font-size: 6rem;
  line-height: 0.7;

  margin: 0;
  font-weight: 900;

  span {
    color: #cf2d09;
  }

  ${mediaQuery()} {
    font-size: 4rem;
  }
`;

export const MainText = styled.p`
  font-size: 4rem;
  margin: 0;
  line-height: 1;

  ${mediaQuery()} {
    font-size: 2.2rem;
    margin-top: 4px;
  }
`;

export const FunText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 24px;
  margin-bottom: 24px;

  font-size: 1rem;
`;
