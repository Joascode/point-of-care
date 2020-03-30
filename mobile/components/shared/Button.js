import React from 'react';
import styled from 'styled-components';

import { colors } from '../../globals';

export const ButtonStyle = styled.TouchableOpacity`
    background-color: white;
    border-radius: 13px;
    margin: auto;
`;


export const ButtonText = styled.Text`
    color: ${colors.pinkish};
    text-align: center;
    font-size: 20;
    padding: 5px 15px;
`;

export default class BloomButton extends React.Component {
    render() {
        return (
            <ButtonStyle {...this.props}>
                <ButtonText>
                    {this.props.children}
                </ButtonText>
            </ButtonStyle>
        )
    }
}