import React from 'react';

import Animation from '../Shared/Animation';
import { apparaatZoeken, dataOphalen, succesVinkje } from '../animations/zelftestanimations';

export default class ScanForDeviceAnimation extends React.Component {
  render() {
    return (
      this._selectAnimation()
    );
  }

  _selectAnimation = () => {
    if(this.props.deviceFound === false) {
      return <Animation src={apparaatZoeken} />
    } else if(this.props.dataTransferred === false) {
      return <Animation src={dataOphalen} />
    } else {
      return <Animation src={succesVinkje} />
    }
  }
}