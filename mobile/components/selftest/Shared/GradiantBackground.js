import React from 'react';
import { ImageBackground } from 'react-native';
import Image from '../../../assets/images/bgImageFull.png';

export default class GradiantBackground extends React.Component {
    render() {
        return (
            <ImageBackground
                resizeMode='stretch'
                source={Image}
                style={{
                    position: 'absolute',
                    top: 0,
                    // flex: 1,
                    width: '100.2%',
                    height: this.props.height || '100%',
                    backgroundColor: this.props.backgroundColor || 'transparent'
                }}
            >
                {this.props.children}
            </ImageBackground>
        )
    }
}