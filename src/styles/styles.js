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
  /* top: ${Responsive.heightPercentageToDP(1.1)}; */
`;
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
