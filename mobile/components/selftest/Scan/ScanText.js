import React from 'react';

export default class ScanText extends React.Component {
    render() {
      return this._selectAnimation();
    }

    _selectAnimation = () => {
        if(this.props.deviceFound === false) {
          return 'Leg uw mobiel met de app open bij het zelftestkastje.'
        } else if(this.props.dataTransferred === false) {
          return 'Zelftestkastje plaatst de gegevens over naar de mobiel.'
        } else {
          return 'Overplaatsen van gegevens klaar!'
        }
      }
}