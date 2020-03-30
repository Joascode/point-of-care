import React from 'react';

export default class ScanForDevice extends React.Component {
    constructor() {
        super();
        this.state = {
            scanning: true,
            scanTimer: null,
            transferTimer: null
        }
    }

    componentDidMount() {
        if(!this.state.scanTimer) {
            const scanTimer = setTimeout(() => {
                this.setState({ scanning: false })
                if(this.props.onFind) {
                    this.props.onFind();
                    this._startDataTransfer();
                }
            }, this.props.scanTimeDuration);

            this.setState({ scanTimer });
        }
    }

    componentWillUnmount() {
        if(this.state.scanTimer) {
            clearTimeout(this.state.scanTimer);
        }
        if(this.state.transferTimer) {
            clearTimeout(this.state.transferTimer);
        }
    }

    render() {
      return (
        this.props.children
      );
    }

    _startDataTransfer = () => {
        const timer = setTimeout(() => {
            if(this.props.onTransfer) this.props.onTransfer();
        }, this.props.transferTimeDuration);

        this.setState({ transferTimer: timer });
    }
}