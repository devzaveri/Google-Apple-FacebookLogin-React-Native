import styled from 'styled-components/native';
import {Colors, Responsive, Fonts, Images} from '../Theme';

export const HeaderMainiView = styled.View`
  flex-direction: row;
  height: 50px;
`;
export const BackbtnView = styled.TouchableOpacity`
  flex: 0.1;
  justify-content: center;
  padding-left: 10px;
`;
export const BackBtnImg = styled.Image`
  height: 15px;
  width: 15px;
`;
export const TitleView = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
export const MenuView = styled.TouchableOpacity`
  flex: 0.1;
  padding-right: 10px;
  justify-content: center;
  align-items: flex-end;
`;
export const MainContainerView = styled.View`
height: ${Responsive.heightPercentageToDP(100)}px;
`
export const PaymentMethodText = styled.Text`
font-size: 16px;
font-weight: 400;
`
export const MainInnerview = styled.View`
padding-top: 20px;
`
export const PaymentImageView = styled.View`
margin-top: 20px;
flex-direction: row;
`
export const GpayBtn = styled.TouchableOpacity`
margin-right: 10px;
`
export const GPayImg = styled.Image`
height: 40px;
width: 100px;
`
export const ApplyPayBtn = styled.TouchableOpacity`
flex: 1;
`
export const ApplePayImg = styled.Image`
height: 40px;
width: 100px;
`
export const VisaBtn = styled.TouchableOpacity`
flex: 1;
`
export const VisaImg = styled.Image`
height: 40px;
width: 100px;
`
export const ShippingText = styled.Text`
font-size: 16px;
font-weight: 400;
margin-top: 30px;
`
export const ShippingServicesView = styled.View`
margin-top: 20px;
flex-direction: row;
`
export const FexExBtn = styled.TouchableOpacity`
margin-right: 10px;
`
export const FexExImg = styled.Image`
height: 40px;
width: 100px;
`
export const DHLBtn = styled.TouchableOpacity`
margin-left: 10px;
`
export const DHLImg = styled.Image`
height: 40px;
width: 100px;
`
export const EmptyLFMainView = styled.View`
height: ${Responsive.heightPercentageToDP(10)}px;
width: ${Responsive.widthPercentageToDP(90)}px;
justify-content: center;
align-items: center;
`
export const ShopNowBtn = styled.TouchableOpacity`
height: ${Responsive.heightPercentageToDP(7.5)}px;
width: ${Responsive.widthPercentageToDP(80)}px;
background: ${Colors.Bardil};
border-radius: 30px;
justify-content: center;
align-items: center;
`
export const ShopNowText = styled.Text`
font-size: 18px;
font-weight: 400;
color: ${Colors.white};
`