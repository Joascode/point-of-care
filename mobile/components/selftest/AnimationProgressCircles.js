import React from 'react';
import styled from 'styled-components';

export default class AnimationProgressCircles extends React.Component {        
      render() {
        return (
            <CircleContainer>
                {[...Array(this.props.nrOfCircles)].map((x, i) => {
                    if (i + 1 === this.props.animationNr) {
                        return <FilledCircle circleRadius={this.props.circleRadius} key={i} />
                    }
                    return <OpenCircle circleRadius={this.props.circleRadius} key={i} />
                })}
            </CircleContainer>
        );
      }
}

const CircleContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 10px 0px;
`;

const OpenCircle = styled.View.attrs(({ size }) => ({
    // we can define static props
    // type: "password",
  
    // or we can define dynamic ones
    width: size || 10,
    height: size || 10
  }))`
    width: ${props => props.circleRadius};
    height: ${props => props.circleRadius};
    border-radius: 50;
    background-color: #f5ab93;
    margin: 0px 4px 0px 4px;
`;

const FilledCircle = styled.View.attrs(({ size }) => ({
    // we can define static props
    // type: "password",
  
    // or we can define dynamic ones
    width: size || 10,
    height: size || 10
  }))`
    width: ${props => props.circleRadius};
    height: ${props => props.circleRadius};
    border-radius: 50;
    background-color: white;
    margin: 0px 4px 0px 4px;
`;