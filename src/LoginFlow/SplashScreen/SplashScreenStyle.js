import styled from 'styled-components/native';
import {Colors, Responsive} from '../../Theme';

export const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background-color: ${Colors.blackColor};
`;

export const TemplateImageView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${Responsive.heightPercentageToDP('27%')};
`;

export const SplashImageView = styled.Image`
  align-self: center;
  height: ${Responsive.heightPercentageToDP('10%')};
  width: ${Responsive.widthPercentageToDP('15%')};
`;
export const AppNameText = styled.Text`
  text-align: center;
  align-self: center;
  /* margin-top: ${Responsive.heightPercentageToDP('0.5')}; */
  color: ${Colors.whiteColor};
  font-size: ${Responsive.convertFontScale('50')};
`;

export const WelcomeText = styled.Text`
  text-align: center;
  align-self: center;
  position: absolute;
  bottom: ${Responsive.heightPercentageToDP('2')};
  color: ${Colors.whiteColor};
  font-size: ${Responsive.convertFontScale('14')};
`;
