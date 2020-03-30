import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import AnimationProgressCircles from './AnimationProgressCircles';
import AnimationProgressButtons from './Shared/AnimationProgressButtons';

export default class AnimationProgress extends React.Component {    
  render() {
    return (
        <View style={{ display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
          <AnimationProgressCircles 
            circleRadius={12} 
            animationNr={this.props.currentAnimationNr} 
            nrOfCircles={this.props.maxAnimationIndex} 
          />
        </View>
    );
  }
}