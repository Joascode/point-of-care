import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../../../globals';

export default class AnimationProgressButtons extends React.Component {    
      render() {
        return (
            <ButtonContainer>
                <TerugButtonContainer>{this._renderPreviousButton()}</TerugButtonContainer>
                <DoorgaanButtonContainer>{this._renderNextButton()}</DoorgaanButtonContainer>
            </ButtonContainer>
        );
      }
    
    _renderPreviousButton = () => {
      return this.props.onPrevious ? 
        <ButtonStyle onPress={this.props.onPrevious}>
          <MaterialIcons 
            name={this.props.terugFAIcon || 'chevron-left'} 
            size={40} 
            color={colors.pinkish}
            style={{ textAlign: 'center'}} />
        </ButtonStyle> : 
        null;
    }

    _renderNextButton = () => {
      return this.props.onNext ? 
        <ButtonStyle onPress={this.props.onNext}>
          <MaterialIcons 
            name={this.props.doorgaanFAIcon || 'chevron-right'} 
            size={40}
            color={colors.pinkish} 
            style={{ textAlign: 'center'}} />
        </ButtonStyle> : 
        null;
    }
}

const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: white;
  border-radius: 13px;
  width: 50%;
`;

const ButtonText = styled.Text`
  color: ${colors.pinkish};
  text-align: center;
  font-size: 30;
`;

const DoorgaanButtonContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  /* margin-right: 20px;
  align-items: flex-end; */
`;

const TerugButtonContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  /* margin-left: 20px;
  align-items: flex-start; */
`;