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
import { pakTest } from '../animations/zelftestanimations';
import Animation from '../Shared/Animation';
import AnimationProgressButtons from "../Shared/AnimationProgressButtons";
import GradiantBackground from '../Shared/GradiantBackground';
import { colors } from '../../../globals';

export default class GrabTest extends React.Component {
    render() {
        return ( 
            <AnimationContainer>
                <AnimationTopBar>
                    <GradiantBackground>
                        <View style={{ flex: 1 }}>
                            <Animation src={pakTest} />
                            {this.props.children}
                        </View>
                        <AnimationSpaceBar spaceSize={50} />
                    </GradiantBackground>
                </AnimationTopBar>
                <AnimationMidBar>
                    <AnimationMidBarBlock>
                        <AnimationTextContainer>
                            Pak het zelfteststaafje
                        </AnimationTextContainer>
                    </AnimationMidBarBlock>
                </AnimationMidBar>
                <AnimationBottomBar style={{ backgroundColor: colors.softBeige }}>
                    <AnimationProgressButtons onNext={() => this.props.onNext()} />
                </AnimationBottomBar>
            </AnimationContainer>
        );   
    }
}