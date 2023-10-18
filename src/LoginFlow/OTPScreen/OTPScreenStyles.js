import styled from 'styled-components/native';
import {Colors} from '../../Theme';
import Responsive from '../../Theme/Responsive';

export const Container = styled.SafeAreaView`
flex: 1;
  background-color: ${Colors.white};
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

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
export const TimeText = styled.Text`
font-size: 18px;
font-weight: 400;
color: #AAAAAA;
text-align: center;
margin-top: 10px;
`
export const OtpSection = styled.View`
margin-top: 20px;
`
export const LoginButtonView = styled.View`

padding: 30px;
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