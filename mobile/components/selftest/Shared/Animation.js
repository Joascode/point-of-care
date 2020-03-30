import React from 'react';
import { Animated } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class SelfTestAnimation extends React.Component {
    constructor() {
      super();
      this.state = {
        progress: new Animated.Value(0),
      }
    }

    componentDidMount() {
      // Animated.timing(this.state.progress, {
      //   toValue: this.props.progressTill ? this.props.progressTill : 1,
      //   duration: 5000,
      //   easing: Easing.linear,
      // }).start();
      this.animation.play();
    }

    componentDidUpdate() {
      
      this.animation.play();
    }
  
    render() {
      return (
        <Lottie
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
          source={this.props.src}
          // progress={this.state.progress}
          loop={this.props.loop === undefined ? true : this.props.loop}
        />
      );
    }
}