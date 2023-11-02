import styled from 'styled-components/native';
import {Colors, Responsive, Fonts, Images} from '../../Theme';
import { colors } from 'react-native-elements';

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
export const MainView = styled.View`
flex: 1;
height: ${Responsive.heightPercentageToDP(100)}px;
padding-top: 30px;
`
export const AddressText = styled.Text`
font-size: 16px;
font-weight: 400;
`
export const AddressDetailsView = styled.View`
padding-top: 20px;
padding-bottom: 20px;
padding-right: 10px;
padding-left: 20px;
background: ${Colors.textInput};
margin-top: 10px;
`
export const FirstAdderss = styled.Text`
font-size: 14px;
`
export const SecondAddress = styled.Text`
font-size: 14px;
`
export const ThirdAdderss = styled.Text`
font-size: 14px;
`
export const MainItemView = styled.View`
margin-top: 20px;
`
export const ItemText = styled.Text`
font-size: 16px;
font-weight: 400;
`
export const ItemContainer = styled.View`
/* padding-top: 10px; */

`
export const ItemImg = styled.Image`
/* height: 78px;
width: 78px; */
height: ${Responsive.heightPercentageToDP(9)}px;
width: ${Responsive.widthPercentageToDP(20)}px;
border-radius: 15px;
`
export const ItemDetailsView = styled.View`
padding-left: 20px;
`
export const ItemNameText = styled.Text`
font-size: 12px;
font-weight: 700;
`
export const ItemDetailsText = styled.Text`
font-size: 12px;
font-weight: 400;
color: ${Colors.OrGray};
margin-top: 5px;
`
export const ItemPriceText = styled.Text`
font-size: 16px;
font-weight: 700;
color: ${Colors.Bardil};
margin-top: 5px;
`
export const CountView = styled.View`
flex: 1;
align-items: center;
justify-content: flex-end;
flex-direction: row;
`
export const CloseBTN = styled.TouchableOpacity`

`
export const CloseImg = styled.Image`
height: 18px;
width: 18px;
`
export const CountText = styled.Text`
font-size: 18px;
font-weight: 400;
color: ${Colors.OrGray};
margin-left: 10px;
margin-right: 10px;
`
export const PaymentContainer = styled.View`
margin-top: 30px;
`
export const PaymentText = styled.Text`
font-size: 16px;
font-weight: 400;
`
export const PaymentImg = styled.Image`
height: 40px;
width: 100px;
margin-top: 20px;
`
export const ShippingContainer = styled.View`
margin-top: 30px;
`
export const ShippingText = styled.Text`
font-size: 16px;
font-weight: 400;
`
export const ShippingImg = styled.Image`
height: 40px;
width: 100px;
margin-top: 20px;
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
export const SheetMainView = styled.View`
padding: 20px;
`
export const SizeView = styled.View`
flex-direction: row;
align-items: center;

`
export const SizeText = styled.Text`
font-size: 16px;
font-weight: 400;
color: #001833;
`
export const SizeTypeView = styled.View`
margin-left: 30px;
justify-content: center;
`
export const SizeFlatlist = styled.FlatList`

`
export const SizeButton = styled.TouchableOpacity`
height: 24px;
width: 24px;
margin-left: 10px;
background: ${props => props.selected ? "#FF7465" : "#fff"};
justify-content: center;
align-items: center;
border-width: 1px;
border-radius: 5px;
border-color: #F7F8FB;
`
export const ColorView = styled.View`
flex-direction: row;
align-items: center;
margin-top: 20px;
`
export const ColorText = styled.Text`
color: #001833;
font-size: 16px;
font-weight: 400;
`

export const ColorFlatlist = styled.FlatList`
margin-left: 30px;
`
export const ColorButton = styled.TouchableOpacity`
height: 24px;
width: 24px;
margin-left: 10px;
background: ${props => props.selectedColor};
justify-content: center;
align-items: center;
border-width: 2px;
border-radius: 75px;
border-color: ${props => props.ColorSelected ? "#C5C5C5" : "#fff"};
`

export const TotalView = styled.View`
flex-direction: row;
align-items: center;
margin-top: 20px;
`
export const TotalText = styled.Text`
color: #001833;
font-size: 16px;
font-weight: 400;
`
export const TotleCountView = styled.View`
margin-left: 30px;
flex-direction: row;
`
export const PlusButton = styled.TouchableOpacity`
height: 24px;
width: 24px;
border-width: 1px;
border-color: #F7F8FB;
border-radius: 5px;
justify-content: center;
align-items: center;
`
export const MinusImage = styled.Image`
height: 2px;
width: 7px;
tint-color: ${props => props.getColor};
`
export const TotalCountTextView = styled.View`
padding-left: 10px;
padding-right: 10px;
justify-content: center;
align-items: center;
`
export const TotleCountText = styled.Text`
`
export const MinusButton = styled.TouchableOpacity`
height: 24px;
width: 24px;
border-width: 1px;
border-color: #F7F8FB;
border-radius: 5px;
justify-content: center;
align-items: center;
`
export const PlusImage = styled.Image`
height: 8px;
width: 8px;
`
export const DashLineView = styled.View`
margin-top: 30px;
width: 100%;

align-self: center;
`
export const TPView = styled.View`
flex-direction: row;
margin-top: 20px;
`
export const TotalPaymentText = styled.Text`
font-size: 18px;
font-weight: 400;
color: #001833;
`
export const TPAmountView = styled.View`
flex: 1;
align-items: flex-end;
`
export const TPamountText = styled.Text`
color: #FF7465;
font-size: 18px;
font-weight: 400;
`
export const PaymentBTNView = styled.View`
height: 84px;
justify-content: center;
align-items: center;
`
export const PaymentButton = styled.TouchableOpacity`
height: 46px;
background: #FF7465;
width: 80%;
border-radius: 30px;
justify-content: center;
align-items: center;
`
export const PaymentTetx = styled.Text`
font-size: 18px;
font-weight: 400;
color: #fff;
`