import React, { Component } from "react";
import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";

const Wrapper = styled.div`
  width: ${props => (props.circumference ? props.circumference : "300")}px;
  height: ${props => (props.circumference ? props.circumference : "300")}px;
  left: 50%;
  display: inline-block;
`;

const FirstRow = styled.div`
  width: 100%;
  height: 50%;
`;

const SecondRow = styled.div`
  width: 100%;
  height: 50%;
`;

class ButtonCircle extends Component {
  constructor(props) {
    super(props);
    this.state = { circumference: this.props.circumference };
  }

  componentDidMount() {
    if (this.props.circumference < 400) {
      this.setState({ circumference: 400 });
    }
  }

  render() {
    const clickers = [
      () => console.log("1"),
      () => console.log("2"),
      () => console.log("3"),
      () => console.log("4"),
      () => console.log("5"),
      () => console.log("6")
    ];
    return (
      <Wrapper circumference={this.state.circumference}>
        <FirstRow>
          <ButtonGroup
            fbClick={clickers[0]}
            sbClick={clickers[1]}
            circumference={this.state.circumference}
          />
          <ButtonGroup
            rotate="90"
            scale="-1, 1"
            fbClick={clickers[3]}
            sbClick={clickers[2]}
            circumference={this.state.circumference}
          />
        </FirstRow>
        <SecondRow>
          <ButtonGroup
            rotate="270"
            scale="1, -1"
            disable
            fbClick={clickers[5]}
            circumference={this.state.circumference}
          />
          <ButtonGroup
            rotate="180"
            scale="-1"
            disable
            fbClick={clickers[4]}
            circumference={this.state.circumference}
          />
        </SecondRow>
      </Wrapper>
    );
  }
}

export default ButtonCircle;
