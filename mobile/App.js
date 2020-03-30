import React from "react";
import styled from "styled-components";
import { ImageBackground } from 'react-native';
import SelfTestHome from "./components/selftest/Home";
import ResultModal from './components/selftest/Result/ResultModal';

import { createStackNavigator, createAppContainer } from "react-navigation";
import headerStyles from "./components/appsettings/headerbarStyles";

import { Font, AppLoading, Asset } from "expo";
import { setCustomProps } from "./globals";
import BloomButton from './components/shared/Button';
import { MaterialIcons } from '@expo/vector-icons';

// Styles for HomeScreen
const Container = styled.View`
  flex: 1;
  /* background-color: papayawhip; */
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.View`
  position: absolute;
  top: 20%;
`;

const ImageContainer = styled.Image`
  position: absolute;
  bottom: 2;
  margin-top: 25px;
`;

const BackgroundImageContainer = styled.ImageBackground`
  /* position: absolute; */
  top: -3;
  width: 100%;
  height: 100%;
`;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...headerStyles
  };

  constructor() {
    super();
    this.state =  {
      testResultsReceived: false
    }
  }

  render() {
    return (
      <Container>
        <BackgroundImageContainer
          source={require("./assets/images/bgImage0.png")}
        />
        <TitleContainer>
          <BloomButton
            onPress={() => this.props.navigation.navigate("SelfTest")}
          >
            Doe de test!
          </BloomButton>
        </TitleContainer>
        <ImageContainer
          source={require("./assets/images/buttonCircle.png")}
          style={{ width: 270, height: 360 }}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </Container>
    );
  }

  showBanner = () => {
    setTimeout(() =>{
      this.setState({
        testResultsReceived: true
      })
    }, 3000);
  }
}

// Routes of the application
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SelfTest: SelfTestHome
  },
  {
    initialRouteName: "Home"
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    ResultModal: {
      screen: ResultModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);


const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return ImageBackground.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const cacheFonts = (fonts) => {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/bgImageFull.png'),
    ]);

    const fontAssets = cacheFonts([MaterialIcons.font]);
    Font.loadAsync({
      lato: require("./assets/fonts/Lato-Regular.ttf")
    }).then(setCustomProps);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  // async componentDidMount() {
  //   // Load the custom font and await this method, then set the custom props
  //   await Font.loadAsync({
  //     lato: require("./assets/fonts/Lato-Regular.ttf")
  //   }).then(setCustomProps);
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <AppContainer /> 
    );
    // return <>{this.state.fontLoaded ? <AppContainer /> : null}</>;
  }
}
