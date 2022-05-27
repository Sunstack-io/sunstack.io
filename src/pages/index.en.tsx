import * as React from "react";
import styled from "styled-components";
import { FunText, MainText, Title } from "../components/HomeComponents";

const Main = styled.main`
  background-color: black;
  color: white;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  font-family: "Source Sans Pro", serif;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => {
  return (
    <Main>
      <div>
        <Title>
          <span>Sun</span>stack
        </Title>
        <MainText>We're coming.</MainText>
      </div>

      <FunText>We're sprucing ourselves up.</FunText>
    </Main>
  );
};

export default IndexPage;
