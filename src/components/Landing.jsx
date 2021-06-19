import React, { Component } from "react";
import Header from "./Header";

import CardLayout from "./CardLayout";
import styled from "styled-components";

class Landing extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header />
        <CardLayout />
      </Container>
    );
  }
}

export default Landing;

const Container = styled.div`
  display: inline;
  position: absolute;
  width: 100%;
  height: 100%;
`;
