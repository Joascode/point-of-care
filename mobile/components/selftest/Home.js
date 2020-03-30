import React from 'react';
import { View } from 'react-native';

import headerStyles from '../appsettings/headerbarStyles';
import AnimationProgress from './AnimationProgress';
import RaspberryService from './Scan/RaspberryService';
import UploadService from './Upload/UploadService';
import Scan from './Scan/Scan';
import GrabTest from './Grab/GrabTest';
import Drip from './Drip/Drip';
import UploadingTestData from './Upload/UploadingTestData';
import Introduction from './Introduction/Introduction';

export default class SelfTestHome extends React.Component {
    static navigationOptions = {
        headerTitle: "Test uitvoeren",
        ...headerStyles,
    };

    constructor() {
        super();
        this.state = {
            introduction: true,
            animationNr: 1,
            maxAnimationNr: 4,
            minAnimationNr: 1,
            deviceFound: false,
            dataTransferred: false,
            dataUploaded: false,
        }
    }
    
    render() {
        return (
            <View style={{ display: 'flex', flex: 1, width: '100%'}}>
                {this.state.introduction === true ? 
                    <Introduction onStartZelftest={() => this.setState({ introduction: false })} /> :
                    this._renderAnimationState()
                }
            </View>
        );
    }

    _renderAnimationState() {
        switch(this.state.animationNr) {
            case 1: {
                return ( 
                    <GrabTest onNext={() => this._nextAnimation()}>
                        <AnimationProgress 
                            minAnimationIndex={this.state.minAnimationNr}
                            maxAnimationIndex={this.state.maxAnimationNr}
                            currentAnimationNr={this.state.animationNr}
                        />
                    </GrabTest> 
                );
            }
            case 2: {
                return (
                    <Drip
                        onNext={() => this._nextAnimation()}
                        onPrevious={() => this._previousAnimation()}
                    >
                        <AnimationProgress 
                            minAnimationIndex={this.state.minAnimationNr}
                            maxAnimationIndex={this.state.maxAnimationNr}
                            currentAnimationNr={this.state.animationNr}
                        />
                    </Drip>
                );
            }
            case 3: {
                // this._resetScan();
                return (
                    <RaspberryService
                        scanTimeDuration={7000}
                        transferTimeDuration={7000}
                        onFind={() =>  {
                            this.setState({ deviceFound: true });
                        }} 
                        onTransfer={() => {
                            this.setState({ dataTransferred: true });
                        }}
                    >
                        <Scan
                            deviceFound={this.state.deviceFound}
                            dataTransferred={this.state.dataTransferred}
                            onNext={() => this._nextAnimation()}
                            onPrevious={() => this._previousAnimation()}
                        >
                            <AnimationProgress 
                                minAnimationIndex={this.state.minAnimationNr}
                                maxAnimationIndex={this.state.maxAnimationNr}
                                currentAnimationNr={this.state.animationNr}
                            />
                        </Scan>
                    </RaspberryService>
                );
            }
            case 4: {
                // this._resetUpload();
                return (
                    <UploadService
                        uploadTimeDuration={7000}
                        onUpload={() => {
                            this.setState({ dataUploaded: true });
                        }}
                    >
                        <UploadingTestData
                            uploaded={this.state.dataUploaded}
                            onNext={() => this.props.navigation.navigate('Home')}
                            onPrevious={() => this._previousAnimation()}
                        >
                            <AnimationProgress 
                                minAnimationIndex={this.state.minAnimationNr}
                                maxAnimationIndex={this.state.maxAnimationNr}
                                currentAnimationNr={this.state.animationNr}
                            />
                        </UploadingTestData>
                    </UploadService>
                );
            }
            default: {
                return null;
            }
        }
    }

    _resetUpload = () => {
        if(this.state.dataUploaded) {
            this.setState({
                dataUploaded: false,
            });
        }
    }

    _resetTransfer = () => {
        if(this.state.dataTransferred) {
            this.setState({
                dataTransferred: false
            });
        }
    }

    _resetScan = () => {
        if(this.state.deviceFound) {
            this.setState({
                deviceFound: false,
                dataTransferred: false
            });
        }
    }

    _delayNextAnimation(delay = 1000) {
        setTimeout(() => {
            this._nextAnimation() 
        }, delay);
    }

    _nextAnimation = () => {
        this.setState({
            animationNr: this.state.animationNr < this.state.maxAnimationNr ? this.state.animationNr + 1 : this.state.animationNr
        });
      }

      _previousAnimation = () => {
          this.setState({
            animationNr: this.state.animationNr > this.state.minAnimationNr ? this.state.animationNr - 1 : this.state.animationNr
          });
      }
}