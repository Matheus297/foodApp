import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#fc6d3f",
    secondary: "#cdcdd2",


    lightGray: "#f5f5f6",
    lightGray2: "#f6f6f7",
    lightGray3: "##efeff1",
    lightGray4: "#f8f8f9",
    transparent: "transparent",
    darkGray: "#898c95",
}


export const SIZES = {
    base: 8,
    font: 24,
    radius: 30,
    padding: 10,
    padding2: 12,


    largeTitle: 50,
    h1: 38,
    h2: 22,
    h3: 28,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height,
}

const appTheme = {COLORS, SIZES};

export default appTheme;