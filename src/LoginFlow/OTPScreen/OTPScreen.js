import React from 'react';

import {
  Container,
  BackView,
  BackImg,
  BackTouchable,
  MainViewContainer,
  OtpVerifText,
  OtpDetails,
  TimeText,
  OtpSection,
  LoginButtonView,
  LoginTouchable,
  LoginBtnText,

} from './OTPScreenStyles';

import {Colors} from '../../Theme';
import {Images} from '../../Theme';
import {ScrollView, Text, View} from 'react-native';
import SMSVerifyCode from 'react-native-sms-verifycode';

const OTPScreen = ({navigation}) => {
  const BackBtnSection = () => {
    return (
      <BackView>
        <BackTouchable
          onPress={() => {
            navigation.goBack();
          }}>
          <BackImg source={Images.back} resizeMode="contain"></BackImg>
        </BackTouchable>
      </BackView>
    );
  };
  const MainViewSecion = () => {
    return (
      <MainViewContainer>
        <OtpVerifText>OTP Verification</OtpVerifText>
        <OtpDetails>
          We sent otp verification to your email this code will expired in 
        </OtpDetails>
        <TimeText>00:30</TimeText>
        <OtpSection>
        <SMSVerifyCode
        ref={ref => (this.verifycode = ref)}
        onInputCompleted={this.onInputCompleted}
        containerPaddingHorizontal={20}
        codeViewBorderColor="#fff"
        codeViewBackgroundColor="#F7F8FB"
        codeViewBorderRadius={16}
        verifyCodeLength={4} 
      />
      </OtpSection>
      </MainViewContainer>
    );
  };
  const BTNView = () => {
    return (
        <LoginButtonView>
        <LoginTouchable onPress={()=>{
          navigation.navigate("HomeScreen")
        }}>
          <LoginBtnText>Register</LoginBtnText>
        </LoginTouchable>
      </LoginButtonView>
    );
  };

  return (
    <Container>
      <ScrollView>
      {BackBtnSection()}
      {MainViewSecion()}
      </ScrollView>
      {BTNView()}
    </Container>
  );
};

export default OTPScreen;
