import React from 'react';

export default class UploadingTest extends React.Component {
    constructor() {
        super();
        this.state = {
            uploading: true,
            uploadTimer: null
        }
    }

    componentDidMount() {
        if(!this.state.uploadTimer) {
            const uploadTimer = setTimeout(() => {
                this.setState({ uploading: false });
                if(this.props.onUpload) this.props.onUpload();
            }, this.props.uploadTimeDuration);

            this.setState({ uploadTimer });
        }
    }

    componentWillUnmount() {
        if(this.state.uploadTimer) {
            clearTimeout(this.state.uploadTimer);
        }
    }

    render() {
      return (
        this.props.children
      );
    }
}