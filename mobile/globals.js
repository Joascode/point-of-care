import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from "react-native-global-props";

export const colors = {
  pinkish: '#FA5172',
  darkPurple: '#A3354A',
  wildWatermelon: "#fc6c85",
  atomicTangerine: "#ff9966",
  nightShadz: "#a23d54",
  waxFlower: "#eeb39e",
  venus: '#a3354a',
  darkVenus: '#907B87',
  softBeige: '#FEC5B7'
};

// Custom styles for the <Text> tag (NOTE: these styles are also applied to the <Button> tag)
const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: "lato",
    color: "black"
  }
};

export const setCustomProps = () => {
  setCustomText(customTextProps);
  /**
  setCustomView(customProps);
  setCustomTextInput(customProps);
  setCustomImage(customProps);
  setCustomTouchableOpacity(customProps);
  */
};

export default null;
