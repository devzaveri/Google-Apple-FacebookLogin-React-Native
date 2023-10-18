import React from 'react';

import {
  Container,
  BackView,
  BackImg,
  BackTouchable,
  MainViewContainer,
  OtpVerifText,
  OtpDetails,
  SectionContainer,
  
  EmailSection,
  LoginButtonView,
  LoginTouchable,
  LoginBtnText,
  EmailText,
  EmailTextInput

} from './ForgotPasswordStyles';

import {Colors} from '../../Theme';
import {Images} from '../../Theme';
import {ScrollView, Text, View , KeyboardAvoidingView} from 'react-native';
import SMSVerifyCode from 'react-native-sms-verifycode';

const ForgotPassword = ({navigation}) => {
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
        <OtpVerifText>Forgot Password</OtpVerifText>
        <OtpDetails>
        Please enter your email and we will send you link to return to your account
        </OtpDetails>
        <EmailSection>
          <EmailText>Email</EmailText>
          <EmailTextInput></EmailTextInput>
        </EmailSection>
      </MainViewContainer>
    );
  };
  const BTNView = () => {
    return (
        <LoginButtonView>
        <LoginTouchable onPress={()=> {
          navigation.navigate('ResetPassword')
        }}>
          <LoginBtnText>Continue</LoginBtnText>
        </LoginTouchable>
      </LoginButtonView>
    );
  };

  return (
    <Container>
      <KeyboardAvoidingView>
      <SectionContainer>
        <ScrollView>
      {BackBtnSection()}
      {MainViewSecion()}
      </ScrollView>
      {BTNView()}
      </SectionContainer>
      </KeyboardAvoidingView>
      
    </Container>
  );
};

export default ForgotPassword;
