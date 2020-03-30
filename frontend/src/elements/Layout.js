import React, { Component } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { globalFont } from "../globals";

const Wrapper = styled.div`
  ${globalFont};
`;

const ContentWrapper = styled.div`
  margin-left: 5rem;
  margin: 1rem 1rem 1rem 6rem;
  @media screen and (min-width: 1200px) {
    margin: 0 15%;
  }
`;

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </Wrapper>
    );
  }
}

export default Layout;
