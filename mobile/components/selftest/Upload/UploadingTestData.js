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
import UploadingAnimation from './UploadingTestAnimation';
import UploadingText from './UploadingText';
import { colors } from '../../../globals';

export default class UploadingTestData extends React.Component {
    render() {
        return (
            <AnimationContainer>
                <AnimationTopBar>
                    <GradiantBackground>
                        <View style={{ flex: 1 }}>
                            <UploadingAnimation uploaded={this.props.uploaded} />
                            {this.props.children}
                        </View>
                        <AnimationSpaceBar spaceSize={50} />
                    </GradiantBackground>
                </AnimationTopBar>
                <AnimationMidBar>
                    <AnimationMidBarBlock>
                        <AnimationTextContainer>
                            <UploadingText
                                uploaded={this.props.uploaded}
                            />
                        </AnimationTextContainer>
                    </AnimationMidBarBlock>
                </AnimationMidBar>
                <AnimationBottomBar style={{ backgroundColor: colors.softBeige }}>
                    <AnimationProgressButtons
                        doorgaanFAIcon='check'
                        onPrevious={() => this.props.onPrevious()} 
                        onNext={this.props.uploaded ? () => this.props.onNext() : undefined} />
                </AnimationBottomBar>
            </AnimationContainer>
        );
    }
}