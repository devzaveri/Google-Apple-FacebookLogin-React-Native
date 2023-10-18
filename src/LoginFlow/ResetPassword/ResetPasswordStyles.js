import styled from 'styled-components/native';
import {Colors} from '../../Theme';
import Responsive from '../../Theme/Responsive';

export const Container = styled.SafeAreaView`
flex: 1;
  background-color: ${Colors.white};
  width: 100%;
`;

export const SectionContainer = styled.View`
padding-left: 10px;
padding-right: 10px;
height: 100%;
padding-bottom: 20px;
`

export const BackView = styled.View`
  padding: 20px;
  width: 100%;
`;
export const BackTouchable = styled.TouchableOpacity``;

export const BackImg = styled.Image`
  height: 15.83px;
  width: 15.83px;
`;
export const MainViewContainer = styled.View`
    flex: 1;
    /* justify-content: center; */
    align-items: center;
    padding-top: 50px;
   padding-bottom: 20px;
    
`;
export const OtpVerifText = styled.Text`
font-size: 24px;
font-weight: 400;
color: #001833;
`
export const OtpDetails = styled.Text`
font-size: 18px;
font-weight: 400;
color: #AAAAAA;
text-align: center;
margin-top: 20px;

`
export const EmailSection = styled.View`
height: 85px;
width: 95%;
margin-top: 50px;
padding-left: 10px;
`
export const EmailText = styled.Text`
font-size: 14px;
font-weight: 400;
`
export const EmailTextInput = styled.TextInput`
height: 51px;
width: 100%;
background: #F7F8FB;
border-radius: 16px;
margin-top: 20px;
padding-left: 20px;
`

export const LoginButtonView = styled.View`

padding-top: 20px;
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
