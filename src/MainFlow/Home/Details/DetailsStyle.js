import {View} from 'react-native';
import styled from 'styled-components/native';

import { Responsive,Colors } from "../../../Theme";

export const MainViewcontainer = styled.View`

/* height: ${Responsive.heightPercentageToDP(90)}px; */
background: #fff;
`

export const HIMainView = styled.View`
height: ${Responsive.heightPercentageToDP(65)}px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
`
export const MainImgBackground = styled.ImageBackground`
height: 100%;
width: 100%;

`
export const BackView = styled.TouchableOpacity`
height: 30px;
width: 30px;
background: #fff;
top: 40px;
left: 20px;
border-radius: 75px;
justify-content: center;
align-items: center;
`
export const BackImg = styled.Image`
height: 9px;
width: 9px;
`
export const LiveView = styled.View`
height: 30px;
width: 30px;
border-radius: 75px;
background: #fff;
top: 40px;
right: 20px;
position: absolute;
justify-content: center;
align-items: center;
`
export const LikeImg = styled.Image`
height: 16px;
width: 16px;
`
export const DMainView = styled.View`
padding: 20px;
`
export const FirstDetailsView = styled.View`
flex-direction: row;
height: 50px;
`
export const NameView = styled.View`
flex: 1;

`
export const PriceView = styled.View`
justify-content: center;
align-items: center;
`

export const ProductnameView = styled.Text`
font-size: 24px;
font-weight: 700;
color: ${Colors.OrGray};
`
export const ProductType = styled.Text`
color: #AAAAAA;
font-size: 14px;
font-weight: 400;
`

export const PriceText = styled.Text`
color: #FF7465;
font-size: 24px;
font-weight: 700;
`

export const ProductdetailsView = styled.View`
padding: 20px;

`
export const ProductDetailsText = styled.Text`
font-size: 14px;
font-weight: 400;
color: #757575;
`
export const FooterMainView = styled.View`
background: #fff;
height: ${Responsive.heightPercentageToDP(12)}px;
width: 100%;
justify-content: center;
align-items: center;
/* flex: 1; */
`
export const FInnerView = styled.View`
flex-direction: row;
height: 100px;
`
export const FCartView = styled.View`
justify-content: center;
align-items: center;
flex: 0.35;

`
export const FByNowView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
export const FCartinnerCircleView = styled.TouchableOpacity`
height: 64px;
width: 64px;
background: #F7F8FB;
border-radius: 75px;
justify-content: center;
align-items: center;
`
export const CartImg = styled.Image`
height: 20px;
width: 20px;
`
export const FButInnerView = styled.TouchableOpacity`
height: 64px;
width: 80%;
background: #FF7465;
border-radius: 30px;
justify-content: center;
align-items: center;
`
export const FBuyText = styled.Text`
font-size: 16px;
font-weight: 400;
color: #fff;
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