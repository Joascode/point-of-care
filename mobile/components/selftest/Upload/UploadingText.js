import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

export default class UploadingTest extends React.Component {
    render() {
      return this._selectText();
    }

    _selectText = () => {
        return this.props.uploaded === false ? 
            'Gegevens worden verstuurd voor controle' :
            'Gegevens verstuurd!';
    }

    _showKlaarButton = () => {
        return !this.props.uploaded === false ? 
            <Button title='Klaar' color='#fc96a3' onPress={() => this.props.onDonePress()} /> :
            null;
    }
}