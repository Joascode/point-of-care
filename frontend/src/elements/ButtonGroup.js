import React, { Component } from "react";
import styled from "styled-components";

const Group = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  position: relative;
  transform: scale(${props => props.scale});
`;

const TriangleButton = styled.button`
  background: transparent;
  position: absolute;
  bottom: 0;
  padding: 0;
  border-radius: 1rem;
  &:focus {
    outline: none;
  }
`;

const FirstButton = styled(TriangleButton)`
  left: 32%;
  // bottom: 0%;
  height: 38%;
  width: 40%;
  border-right: 0px solid transparent;
  border-top: ${props => props.circumference / 20}px solid transparent;
  border-bottom: ${props => props.circumference / 20}px solid transparent;
  border-left: ${props => props.circumference / 4.6875}px solid #ff926f;
  transform: rotate(22deg);
`;

const SecondButton = styled(TriangleButton)`
  left: 61%;
  bottom: 25%;
  height: 40%;
  width: 38%;
  border-bottom: 0px solid transparent;
  border-left: ${props => props.circumference / 20}px solid transparent;
  border-right: ${props => props.circumference / 20}px solid transparent;
  border-top: ${props => props.circumference / 4.6875}px solid #ff926f;
  transform: rotate(-22deg);
`;

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Group rotate={this.props.rotate} scale={this.props.scale}>
        <FirstButton
          onClick={this.props.fbClick}
          circumference={this.props.circumference}
        />
        {!this.props.disable && (
          <SecondButton
            onClick={this.props.sbClick}
            circumference={this.props.circumference}
          />
        )}
      </Group>
    );
  }
}

export default ButtonGroup;
