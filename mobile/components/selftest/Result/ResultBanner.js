import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

export default class Timer extends React.Component {
    render() {
        return (
            <View style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'green'}}>
                <BannerText>Nieuwe testresultaten!</BannerText>
                <Button title='Toon' onPress={() => this.props.navigation.navigate('ResultModal')} />
            </View>
        );
    }
};

const BannerText = styled.Text`
    color: white;
    padding: 5px 0px;
`;