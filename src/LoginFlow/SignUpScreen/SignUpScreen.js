import React, {useState} from 'react';

import {
  Container,
  MainHC,
  HCIcon,
  HCLoginText,
  HCAccView,
  HCAccText,
  HcSignUpTouchale,
  HcSignUpText,
  SMView,
  GoogleTouchable,
  GoogleImg,
  AppleTouchable,
  AppleImg,
  FacebookTouchable,
  FacebookImg,
  OrSection,
  LeftView,
  OrText,
  UserMainView,
  UserNameView,
  UserNameText,
  UserNameTextInput,
  EmailView,
  EmailText,
  EmailTextInput,
  PassView,
  PassText,
  PassTextInput,
  LoginButtonView,
  LoginTouchable,
  LoginBtnText
} from './SignUpScreenStyles';
import {Colors} from '../../Theme';
import {Images} from '../../Theme';
import {ScrollView, Text , KeyboardAvoidingView} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const HeaderView = () => {
    return (
      <MainHC>
        <HCIcon source={Images.AppLogo} resizeMode="contain" />
        <HCLoginText>Register in to Bardeal</HCLoginText>
        <HCAccView>
          <HCAccText>Already have an account? </HCAccText>
          <HcSignUpTouchale
            onPress={() => {
              navigation.goBack();
            }}>
            <HcSignUpText> Sign In</HcSignUpText>
          </HcSignUpTouchale>
        </HCAccView>
        <SMView>
          <GoogleTouchable>
            <GoogleImg source={Images.google}></GoogleImg>
          </GoogleTouchable>
          <AppleTouchable>
            <AppleImg source={Images.apple}></AppleImg>
          </AppleTouchable>
          <FacebookTouchable>
            <FacebookImg source={Images.facebook}></FacebookImg>
          </FacebookTouchable>
        </SMView>
        <OrSection>
          <LeftView></LeftView>
          <OrText>or</OrText>
          <LeftView></LeftView>
        </OrSection>
      </MainHC>
    );
  };

  const MainUserView = () => {
    return (
      <UserMainView>
        <UserNameView>
          <UserNameText>UserName</UserNameText>
          <UserNameTextInput></UserNameTextInput>
        </UserNameView>
        <EmailView>
          <EmailText>Email</EmailText>
          <EmailTextInput></EmailTextInput>
        </EmailView>
        <PassView>
          <PassText>Password</PassText>
          <PassTextInput></PassTextInput>
        </PassView>
        <LoginButtonView>
      <LoginTouchable onPress={()=> {
        navigation.navigate("OTPScreen")
      }}>
        <LoginBtnText>Register</LoginBtnText>
      </LoginTouchable>
    </LoginButtonView>
      </UserMainView>
    );
  };

  return (
    <Container>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}>
      <ScrollView>
        {HeaderView()}
        {MainUserView()}
      </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUpScreen;
