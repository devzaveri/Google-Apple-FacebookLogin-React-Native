import {PixelRatio} from 'react-native';
import Colors from './Colors';

function applyRatio(pointsSize) {
  return pointsSize * 1;
}

function applyRatioInterSpacing(interSize) {
  return interSize / 100;
}

const size = {
  h1: applyRatio(38),
  h2: applyRatio(36),
  h2inter: applyRatio(34),
  h3: applyRatio(28),
  h4: applyRatio(24),
  h5: applyRatio(20),
  xxxxbig: applyRatio(160),
  xxxbig: applyRatio(100),
  xxbigMedium: applyRatio(64),
  xxbig: applyRatio(48),
  xbig: applyRatio(44),
  bigMedium: applyRatio(32),
  big: applyRatio(26),
  regular: applyRatio(22),
  medium: applyRatio(14),
  small: applyRatio(18),
  xsmall: applyRatio(11),
};
const interSpacing = {
  small: applyRatioInterSpacing(40),
  medium: applyRatioInterSpacing(70),
  mediumBig: applyRatioInterSpacing(90),
  big: applyRatioInterSpacing(100),
  xBig: applyRatioInterSpacing(200),
  xxBig: applyRatioInterSpacing(300),
};

const fonts = {
  //   themeFont: 'Poppins-Light',
  //   themeFontBold: 'Poppins-Bold',
  //   themeFontRegular: 'Poppins-Regular',
  //   themeFontMedium: 'Poppins-Medium',
  //   themeFontSemiBold: 'Poppins-SemiBold',
  themeFont: 'OpenSans-Light',
  themeFontBold: 'OpenSans-ExtraBold',
  themeFontRegular: 'OpenSans-Regular',
  themeFontMedium: 'OpenSans-SemiBold',
  themeFontSemiBold: 'OpenSans-Bold',
  OpenSansLightItalic: 'OpenSans-LightItalic',
};

const letterSpacing = {
  bodycopyLower: {
    lineHeight: 32,
    letterSpacing: 70,
  },
  majorTitle: {
    lineHeight: 58,
    letterSpacing: 40,
  },
  messageToUser: {
    lineHeight: 30,
    letterSpacing: 40,
  },
  productName: {
    lineHeight: 22,
    letterSpacing: 40,
  },
  sectionTitle: {
    lineHeight: 35,
    letterSpacing: 40,
  },
  title: {
    lineHeight: 32,
    letterSpacing: 200,
  },
};

const style = {
  title: {
    fontSize: size.xbig,
    // color: Colors.black,
    fontWeight: 'bold',
  },
  smallerTitle: {
    fontSize: size.big,
    // color: Colors.black,
  },
  titleMenu: {
    fontSize: size.h4,
    fontFamily: fonts.themeFontBold,
    color: Colors.blueShade3B,
  },
  clickableText: {
    fontSize: size.h4,
  },
  description: {
    fontSize: size.medium,
    fontFamily: fonts.themeFontRegular,
    color: Colors.black,
  },
  buttonText: {
    fontSize: size.medium,
    fontFamily: fonts.themeFontBold,
    color: Colors.white,
  },
};
export default {
  size,
  style,
  fonts,
  letterSpacing,
  interSpacing,
  applyRatio,
};
