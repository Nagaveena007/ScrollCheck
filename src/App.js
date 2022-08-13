import React from "react";
import styled from "styled-components";

import backgroundImage from "./background.png";
import MyPage from "./MyPage";

export default function App() {
  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>useScrollPosition Hook</Title>
      <MyPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
