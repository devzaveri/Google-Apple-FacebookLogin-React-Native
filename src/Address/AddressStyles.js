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
`;export const MenuImg = styled.Image`
height: 20px;
width: 20px;
`;
export const MainViewContainer = styled.View`
height: ${Responsive.heightPercentageToDP(70)}px;
width: 100%;
padding: 10px;
padding-top: 20px;
`
export const DeliveryText = styled.Text`
font-size: 14px;
font-weight: 400;
color: ${Colors.fontclr};
`
export const DeliveryTextInput = styled.TextInput`
height: ${Responsive.heightPercentageToDP(7)}px;
width: ${Responsive.widthPercentageToDP(80)}px;
background: ${Colors.textInput};
border-radius: 16px;
padding-left: 20px;
padding-right: 20px;
margin-top: 15px;
`
export const CityText = styled.Text`
font-size: 14px;
font-weight: 400;
color: ${Colors.fontclr};
margin-top: 30px;
`
export const CityTextinput = styled.TextInput`
height: ${Responsive.heightPercentageToDP(7)}px;
width: ${Responsive.widthPercentageToDP(80)}px;
background: ${Colors.textInput};
border-radius: 16px;
padding-left: 20px;
padding-right: 20px;
margin-top: 15px;
`
export const ZipCodeText = styled.Text`
font-size: 14px;
font-weight: 400;
color: ${Colors.fontclr};
margin-top: 30px;
`
export const ZipCodeTextinput = styled.TextInput`
height: ${Responsive.heightPercentageToDP(7)}px;
width: ${Responsive.widthPercentageToDP(80)}px;
background: ${Colors.textInput};
border-radius: 16px;
padding-left: 20px;
padding-right: 20px;
margin-top: 15px;
`
export const BillingView = styled.View`
flex-direction: row;
height: 20px;
margin-top: 20px;
`
export const CheckView = styled.View`
flex: 0.1;
/* background: #000; */
justify-content: center;
align-items: center;
`
export const CheckBtn = styled.TouchableOpacity`
height: 20px;
width: 20px;
background: ${props => props.isChecked != true ? Colors.Bardil : Colors.black};
border-radius: 5px;
`
export const CheckTextView = styled.View`
flex: 1;
padding-left: 10px;
`
export const BilingText = styled.Text`
font-size: 14px;
font-weight: 400;
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