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
import { testUitvoeren } from '../animations/zelftestanimations';
import Animation from '../Shared/Animation';
import AnimationProgressButtons from "../Shared/AnimationProgressButtons";
import GradiantBackground from '../Shared/GradiantBackground';
import { colors } from '../../../globals';

export default class Drip extends React.Component {
    render() {
        return ( 
            <AnimationContainer>
                <AnimationTopBar>
                    <GradiantBackground>
                        <View style={{ flex: 1 }}>
                            <Animation src={testUitvoeren} />
                            {this.props.children}
                        </View>
                        <AnimationSpaceBar spaceSize={50} />
                    </GradiantBackground>
                </AnimationTopBar>
                <AnimationMidBar>
                    <AnimationMidBarBlock>
                        <AnimationTextContainer>
                            Plas over of dip het zelfteststaafje
                        </AnimationTextContainer>
                    </AnimationMidBarBlock>
                </AnimationMidBar>
                <AnimationBottomBar style={{ backgroundColor: colors.softBeige }}>
                    <AnimationProgressButtons 
                        onPrevious={() => this.props.onPrevious()} 
                        onNext={() => this.props.onNext()} />
                </AnimationBottomBar>
            </AnimationContainer>
        );   
    }
}