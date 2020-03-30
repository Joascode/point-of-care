import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import { colors } from '../../../globals';
import GradiantBackground from '../Shared/GradiantBackground';
import {
    AnimationContainer,
    AnimationMidBar,
    AnimationBottomBar
} from  '../Shared/AnimationComponents'
import { ScrollView } from 'react-native-gesture-handler';
import BloomButton from '../../shared/Button';

export default class Introduction extends React.Component {
    render() {
        return (
            <AnimationContainer style={{ backgroundColor: colors.softBeige}}>
                <GradiantBackground height='95%'></GradiantBackground>
                <AnimationMidBar>
                    {/* <GradiantBackground> */}
                        <View style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 40 }}>
                            <View style={{ paddingVertical: 40, paddingHorizontal: 30, marginBottom: 30, backgroundColor: '#fb6580', borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>
                                    {'Voor het uitvoeren van deze zelftest heeft u het bijbehorende apparaat en zelfteststaafje nodig.' + 
                                    'Mocht u deze zijn kwijt geraakt, neem dan contact met ons op (babybloom.nl).'}
                                </Text>
                            </View>
                            <View style={{ paddingVertical: 40, paddingHorizontal: 30, marginBottom: 30, backgroundColor: '#fb6580', borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>
                                    {'Met het uitvoeren van de zelftest gaat u ermee akkoord dat de gegevens worden verstuurd naar uw verloskundige.'}
                                </Text>
                            </View>
                            <View style={{ paddingVertical: 40, paddingHorizontal: 30, marginBottom: 30, backgroundColor: '#fb6580', borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>
                                    {'De resultaten van de zelftest zijn na ~24 uur voor u beschikbaar.'}
                                </Text>
                            </View>
                        </View>
                    {/* </GradiantBackground> */}
                </AnimationMidBar>
                <AnimationBottomBar fixed>
                    <BloomButton onPress={() => this.props.onStartZelftest()}>
                        Start de zelftest
                    </BloomButton>
                </AnimationBottomBar>
            </AnimationContainer>
        );
    }
}