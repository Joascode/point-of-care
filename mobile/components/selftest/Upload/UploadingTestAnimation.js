import React from 'react';

import Animation from '../Shared/Animation';
import { dataUploaden, succesVinkje } from '../animations/zelftestanimations';

export default class UploadingTest extends React.Component {
    render() {
      return (
        this._selectAnimation()
      );
    }

    _selectAnimation = () => {
      return this.props.uploaded === false ? <Animation src={dataUploaden} /> : <Animation src={succesVinkje} />;
    }
}