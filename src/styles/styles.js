/** @format */

import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../Theme';
// import { Colors, Responsive, Fonts } from "../../Theme";

export const TabBarText = styled.Text`
  color: ${Colors.white};
  font-size: ${Responsive.convertFontScale(12)};
  font-family: ${Fonts.fonts.ProductSansRegular};
  top: ${Responsive.heightPercentageToDP(0.4)};
  text-align: center;
`;
export const TabBarContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: ${Responsive.heightPercentageToDP(2)};
`;
export const TabBarContainer2 = styled.View`
position: absolute;
  align-items: center;
  justify-content: center;
background: #FF7465;
height: 61px;
width: 61px;
border-radius: 75px;
/* bottom: 10px; */
`

export const TabBarContainerView2 = styled.View`
height: 80px;
width: 80px;
  resize-mode: contain;
  align-self: center;
  background: #fff;
  bottom: 15px;
  justify-content: center;
  align-items: center;
border-radius: 75px;
`

export const TabBarIcon = styled.Image`
  /* border-width: 1; */
  width: ${Platform.OS === 'ios'
    ? Responsive.heightPercentageToDP('3%')
    : Responsive.heightPercentageToDP('3.5%')}px;
  height: ${Platform.OS === 'ios'
    ? Responsive.heightPercentageToDP('3%')
    : Responsive.heightPercentageToDP('3.5%')}px;
  resize-mode: contain;
  align-self: center;
`;

export const TabBarIcon2 = styled.Image`
  width: ${Platform.OS === 'ios'
    ? Responsive.heightPercentageToDP('3%')
    : Responsive.heightPercentageToDP('3.5%')}px;
  height: ${Platform.OS === 'ios'
    ? Responsive.heightPercentageToDP('3%')
    : Responsive.heightPercentageToDP('3.5%')}px;

  align-self: center;
  tint-color: #fff;
`
