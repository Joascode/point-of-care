import styled from 'styled-components';
import { colors } from '../../../globals';

export {
    AnimationBottomBar,
    AnimationContainer,
    AnimationMidBar,
    AnimationSpaceBar,
    AnimationTextContainer,
    AnimationTopBar,
    AnimationMidBarBlock
}

const AnimationContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    flex: 1;
    width: 100%;
`;

const AnimationTextContainer = styled.Text`
    color: ${colors.darkVenus};
    font-size: 23;
    text-align: center;
    margin: 0;
    padding: 0;
`;

const AnimationTopBar = styled.View`
    display: flex;
    flex-direction: column;
    flex: 5;
    width: 100%;
`;

const AnimationSpaceBar = styled.View`
    flex-basis: auto;
    margin-bottom: ${props => props.spaceSize ||  20};
`;

const AnimationMidBarBlock = styled.View`
    flex: 1;
    justify-content: center;
    padding: 30px;
`;

const AnimationMidBar = styled.ScrollView`
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 2;
`;

const AnimationBottomBar = styled.View`
    /* background-color: ${colors.softBeige}; */
    justify-content: center;
    /* flex: 1; */
    display: flex;
    padding: 20px;
    flex-basis: auto;
    position: ${props => props.fixed ? 'absolute' : 'relative'};
    bottom: 0;
    right: 0;
    left: 0;
`;