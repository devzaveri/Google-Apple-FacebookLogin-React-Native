import styled from 'styled-components/native';
import {Colors} from '../../Theme';
import Responsive from '../../Theme/Responsive';

export const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background-color: ${Colors.white};
  width: 100%;
  /* height: 100%; */
`;  

export const SectionContainer = styled.View`
padding-left: 10px;
padding-right: 10px;
height: 100%;
padding-bottom: 20px;
`

export const MainHC = styled.View`

width: 100%;
align-items: center;


`

export const HCIcon = styled.Image`
height:  170px;
width:  118px;



`
export const HCLoginText = styled.Text`
font-size: 25px;
text-align: center;
font-weight: 700;
line-height: 23.44px;
`
export const HCAccView = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 18px;
`
export const HCAccText = styled.Text`
font-size: 14px;
color: ${Colors.blackColor};
/* font-weight: 400; */
`
export const HcSignUpTouchale = styled.TouchableOpacity`

`
export const HcSignUpText = styled.Text`
font-size: 14px;
color: ${Colors.Bardil};
/* font-weight: 400px; */
`
export const SMView = styled.View`
flex-direction: row;
margin-top: 25px;

`
export const GoogleTouchable = styled.TouchableOpacity`
margin-right: 20px;
`
export const GoogleImg = styled.Image`
height: 45px;
width: 45px;

`
export const AppleTouchable = styled.TouchableOpacity`
margin-right: 20px;
`
export const AppleImg = styled.Image`
height: 45px;
width: 45px;
`
export const FacebookTouchable = styled.TouchableOpacity`
`
export const FacebookImg = styled.Image`
height: 45px;
width: 45px;
`
export const OrSection = styled.View`
flex-direction: row;
/* height: 10px; */
justify-content: center;
margin-top: 20px;
width: 100%;

`
export const LeftView = styled.View`
border-bottom-width: 1px;
border-color: ${Colors.border};
height: 10px;
width: 40%;

`
export const OrText = styled.Text`
margin-left: 10px;
margin-right: 10px;
color: ${Colors.OrGray};
`
export const MainLoginView = styled.View`
height: 100%;
/* background: #000; */
padding: 28px;
flex: 1;
`
export const EmailView = styled.View`
height: 85px;
`
export const EmailText = styled.Text`
font-size: 14px;
font-weight: 400;
margin-left: 10px;

`
export const EmailTextInput = styled.TextInput`
height: 51px;
width: 100%;
position: absolute;
background: ${Colors.textInput};
border-radius: 16px;
padding: 18px;
margin-top: 30px;
color: #000;
`
export const PassView = styled.View`
height: 85px;
margin-top: 10px;
`
export const PassText = styled.Text`
font-size: 14px;
font-weight: 400;
margin-left: 10px;
`
export const PassTextInput = styled.TextInput`
height: 51px;
width: 100%;
position: absolute;
background: ${Colors.textInput};
border-radius: 16px;
padding: 18px;
margin-top: 30px;
color: #000;
`
export const RememberView = styled.View`
flex-direction: row;
margin-top: 10px;
`
export const RememberCheckbox = styled.TouchableOpacity`
/* flex: 1; */
/* height: 24px; */
/* width: 24px; */
flex-direction: row;
align-items: center;
`
export const RememberCheck = styled.TouchableOpacity`
border-width: 1px;
height: 24px;
width: 24px;
border-radius: 5px;
border-color: #C5C5C5;
`
export const RememberText = styled.Text`
margin-left: 10px;
color: #757575;
`

export const ForgotPass = styled.View`
flex: 1;
align-items: flex-end;
`
export const ForgotPassTouchable = styled.TouchableOpacity`
`
export const ForgotText = styled.Text`
color: #757575;
`

export const LoginButtonView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
padding-left: 10px;
padding-right: 10px;
margin-top: 50px;

padding-bottom: 20px;
`
export const LoginTouchable = styled.TouchableOpacity`
height: 64px;
width: 100%;
background: #FF7465;
justify-content: center;
align-items: center;
border-radius: 30px;
`
export const LoginBtnText = styled.Text`
font-size: 18px;
color: #fff;
`

// export const LoginButton = styled.TouchableOpacity`
//   background-color: ${Colors.whiteColor};
//   /* height: ${Responsive.heightPercentageToDP('10%')}; */
//   width: ${Responsive.widthPercentageToDP('90%')};
// `;
// export const LoginText = styled.Text`
//   text-align: center;
//   align-self: center;
//   color: ${Colors.blackColor};
//   font-size: ${Responsive.convertFontScale('14')};
// `;
// export const TextInputEmail = styled.TextInput`
//   color: ${Colors.whiteColor};
//   placeholdertextcolor: ${Colors.whiteColor};
//   font-size: ${Responsive.convertFontScale('15')};
//   align-self: center;
//   max-width: ${Responsive.widthPercentageToDP('50')};
//   min-width: ${Responsive.widthPercentageToDP('40')};
//   margin-left: ${Responsive.widthPercentageToDP('2')};
// `;
// export const TextInputPassword = styled.TextInput`
//   color: ${Colors.whiteColor};
//   placeholdertextcolor: ${Colors.whiteColor};
//   font-size: ${Responsive.convertFontScale('15')};
//   align-self: center;
//   max-width: ${Responsive.widthPercentageToDP('50')};
//   min-width: ${Responsive.widthPercentageToDP('40')};
//   margin-left: ${Responsive.widthPercentageToDP('2')};
// `;
