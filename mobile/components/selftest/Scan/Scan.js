import React from 'react';
import { View } from 'react-native';

import { 
    AnimationContainer,
    AnimationTopBar,
    AnimationMidBar,
    AnimationBottomBar,
    AnimationSpaceBar,
    AnimationTextContainer,
    AnimationMidBarBlock
} from '../Shared/AnimationComponents';
import AnimationProgressButtons from "../Shared/AnimationProgressButtons";
import GradiantBackground from '../Shared/GradiantBackground';
import ScanAnimation from './ScanForDeviceAnimation';
import ScanText from './ScanText';
import { colors } from '../../../globals';

export default class Scan extends React.Component {
    render() {
        return (
            <AnimationContainer>
                <AnimationTopBar>
                    <GradiantBackground>
                        <View style={{ flex: 1 }}>
                            <ScanAnimation 
                                deviceFound={this.props.deviceFound}
                                dataTransferred={this.props.dataTransferred}
                            />
                            {this.props.children}
                        </View>
                        <AnimationSpaceBar spaceSize={50} />
                    </GradiantBackground>
                </AnimationTopBar>
                <AnimationMidBar>
                    <AnimationMidBarBlock>
                        <AnimationTextContainer>
                            <ScanText
                                deviceFound={this.props.deviceFound}
                                dataTransferred={this.props.dataTransferred}
                            />
                        </AnimationTextContainer>
                    </AnimationMidBarBlock>
                </AnimationMidBar>
                <AnimationBottomBar style={{ backgroundColor: colors.softBeige }}>
                    <AnimationProgressButtons 
                        onPrevious={() => this.props.onPrevious()} 
                        onNext={this.props.dataTransferred ? () => this.props.onNext() : undefined} />
                </AnimationBottomBar>
            </AnimationContainer>
        );
    }
}