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
export const MenuImg = styled.Image`
  height: 20px;
  width: 20px;
`;

export const ILMainContainer = styled.View`
padding-top: 20px;
`;
export const ILFlatList = styled.FlatList`

`;

export const InnerFLMainView = styled.View`
flex-direction: row;
height: ${Responsive.heightPercentageToDP(10)}px;
width: ${Responsive.widthPercentageToDP(90)}px;
margin-top: 20px;
`;
export const ItemCheckView = styled.View`
flex: 0.2;
/* background: #000; */
align-items: center;
justify-content: center;
`;
export const CheckBoxBtn = styled.TouchableOpacity`
height: 22px;
width: 22px;
border-width: 1px;
border-color: #C5C5C5;
border-radius: 5px;
background-color: ${(props) => (props.selectedItem ? 'blue' : 'white')};
`
export const ContentView = styled.View`
flex: 1;
flex-direction: row;
padding-left: 10px;
`;
export const ProductImg = styled.Image`
height: ${Responsive.heightPercentageToDP(10)}px;
width: ${Responsive.widthPercentageToDP(20)}px;
border-radius: 15px;
`
export const ProductDetailsView = styled.View`
padding-left: 10px;
padding-top: 5px;
`
export const ProductName = styled.Text`
font-size: 12px;
font-weight: 700;
color: ${Colors.fontclr};
`
export const ProductType = styled.Text`
font-size: 12px;
font-weight: 400;
color: ${Colors.OrGray};
margin-top: 5px;
`
export const ProductPrice = styled.Text`
font-size: 16px;
font-weight: 700;
color: ${Colors.Bardil};
margin-top: 5px;
`
export const CountView = styled.View`
flex: 0.5;
align-items: center;
flex-direction: row;


`
export const MinusBtn = styled.TouchableOpacity`
height: 24px;
width: 24px;
border-color: ${Colors.textInput};
border-width: 1px;
justify-content: center;
align-items: center;
border-radius: 5px;
`
export const MinusImg = styled.Image`
height: 6px;
width: 6px;
`
export const CountText = styled.Text`
font-size: 14px;
font-weight: 700;
margin-left: 10px;
margin-right: 10px;
`
export const PlusBtn = styled.TouchableOpacity`
height: 24px;
width: 24px;
border-color: ${Colors.textInput};
border-width: 1px;
justify-content: center;
align-items: center;
border-radius: 5px;

`
export const PlusImg = styled.Image`
height: 6px;
width: 6px;
`
export const FMainContainer = styled.View`
padding-left: 10px;
padding-right: 10px;
`
export const SelectView = styled.View`
flex-direction: row;
padding-top: 10px;
`
export const SelectText = styled.Text`
font-size: 14px;
font-weight: 400;
color: ${Colors.fontclr};
`
export const SelectCheckOuterView = styled.View`
flex: 1;
align-items: flex-end;
padding-right: 10px;
`
export const SelectCheckView = styled.TouchableOpacity`
height: 18px;
width: 18px;
border-width: 1px;
border-color: ${Colors.outerborder};
background: ${Colors.border};
border-radius: 5px;
`
export const DashLineView = styled.View`
margin-top: 30px;
width: 100%;
align-self: center;
`
export const TotalPaymentView = styled.View`
padding-top: 20px;
flex-direction: row;
`
export const PaymentText = styled.Text`
font-size: 18px;
font-weight: 400;
color: ${Colors.fontclr};
`
export const PriceOuterView = styled.View`
flex: 1;
align-items: flex-end;
padding-left: 10px;
`
export const PriceText = styled.Text`
color: ${Colors.Bardil};
font-size: 18px;
font-weight: 400;
`
export const CheckOutOutterView = styled.View`
justify-content: center;
align-items: center;
padding-top: 30px;
`
export const CheckoutView = styled.TouchableOpacity`
background: ${Colors.checkoutClr};
height: 64px;
width: ${Responsive.widthPercentageToDP(80)}px;
border-radius: 30px;
justify-content: center;
align-items: center;
`
export const CheckoutText = styled.Text`
font-size: 16px;
font-weight: 600;
color: #fff;
`