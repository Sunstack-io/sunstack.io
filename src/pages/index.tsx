import * as React from "react";
import styled from "styled-components";

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

const Title = styled.h1`
  font-family: Raleway, serif;
  font-size: 6rem;
  line-height: 0.7;

  margin: 0;
  font-weight: 900;

  span {
    color: #cf2d09;
  }
`;

const MainText = styled.p`
  font-size: 4rem;
  margin: 0;
  line-height: 1;
`;

const FunText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 24px;
  margin-bottom: 24px;

  font-size: 1rem;
`;
// markup
const IndexPage = () => {
  return (
    <Main>
      <div>
        <Title>
          <span>Sun</span>stack
        </Title>
        <MainText>On arrive.</MainText>
      </div>

      <FunText>On se refait juste une beauté.</FunText>
    </Main>
  );
};

export default IndexPage;
