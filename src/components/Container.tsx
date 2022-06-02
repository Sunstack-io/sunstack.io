import React from "react";
import styled from "styled-components";
import { breakPoints, mediaQuery } from "../styles";

export const Container = styled.div`
  width: 90%;
  max-width: 1060px;
  margin-inline: auto;

  ${mediaQuery(breakPoints.tablet)} {
  }
`;
