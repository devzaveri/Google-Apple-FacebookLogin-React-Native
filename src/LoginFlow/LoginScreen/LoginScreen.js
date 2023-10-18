import React, {useEffect, useState} from 'react';
import {
  Container,
  MainHC,
  HCIcon,
  HCLoginText,
  HCAccView,
  HCAccText,
  HcSignUpTouchale,
  HcSignUpText,
  LoginButton,
  LoginText,
  TextInputEmail,
  TextInputPassword,
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
  MainLoginView,
  EmailView,
  EmailText,
  EmailTextInput,
  PassView,
  PassText,
  PassTextInput,
  RememberView,
  RememberCheckbox,
  RememberCheck,
  RememberText,
  ForgotPass,
  ForgotText,
  ForgotPassTouchable,
  LoginButtonView,
  LoginTouchable,
  LoginBtnText,
} from './LoginScreenStyle';
import {Colors} from '../../Theme';
import {Images} from '../../Theme';
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  
} from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';


export default function LoginScreen({navigation}) {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const LoginGoogle = () => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '1089775330350-oqi7v5k5utl1am0nm50g82r5mq69s8rv.apps.googleusercontent.com',
      iosClientId: '1089775330350-oqi7v5k5utl1am0nm50g82r5mq69s8rv.apps.googleusercontent.com',
      offlineAccess: true,
    }); 
    _signIn();
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken, user} = await GoogleSignin.signIn();
      // const provider = firebase.auth.GoogleAuthProvider;
      // const credential = provider.credential(idToken, accessToken);
      
      // await firebase.auth().signInWithCredential(credential);

      setloggedIn(true);
      console.log('UserInfor()()++>', user);
      // console.log('Clicked');console.log("credential******>" , credential);
      // console.log("await firebase.auth().signInWithCredential(credential)" , await firebase.auth().signInWithCredential(credential));
      // LoginGoogle()
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('Nothing happning');
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  const HeaderView = () => {
    return (
      <MainHC>
        <HCIcon source={Images.AppLogo} resizeMode="contain" />
        <HCLoginText>Login in to Bardeal</HCLoginText>
        <HCAccView>
          <HCAccText>Don’t have an account? </HCAccText>
          <HcSignUpTouchale
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <HcSignUpText> Sign Up</HcSignUpText>
          </HcSignUpTouchale>
        </HCAccView>
        <SMView>
          <GoogleTouchable onPress={LoginGoogle} >
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

  const MainLoginViewFunc = () => {
    return (
      <View>
        <MainLoginView>
          <EmailView>
            <EmailText>Email</EmailText>
            <EmailTextInput></EmailTextInput>
          </EmailView>
          <PassView>
            <PassText>Password</PassText>
            <PassTextInput></PassTextInput>
          </PassView>
          <RememberView>
            <RememberCheckbox>
              <RememberCheck></RememberCheck>
              <RememberText>Remember me</RememberText>
            </RememberCheckbox>
            <ForgotPass>
              <ForgotPassTouchable
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <ForgotText>Forgot Password</ForgotText>
              </ForgotPassTouchable>
            </ForgotPass>
          </RememberView>
        </MainLoginView>
        <LoginButtonView>
          <LoginTouchable>
            <LoginBtnText>Login</LoginBtnText>
          </LoginTouchable>
        </LoginButtonView>
      </View>
    );
  };
  console.log('userInfo==>', userInfo);
  console.log('loggedIn==>', loggedIn);
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <ScrollView>
          {HeaderView()}
          {MainLoginViewFunc()}

          {/* <TextInputEmail
        placeholder={'Enter Your Mobile Number Or Email'}
        placeholderTextColor={Colors.whiteColor}
        allowFontScaling={false}
        autoCapitalize="none"
        // keyboardType="numeric"
        underlineColorAndroid="transparent"
        returnKeyType="done"
        onChangeText={text => setNumber(text)}
      />
      <TextInputPassword
        placeholder={'Enter Your Password'}
        placeholderTextColor={Colors.whiteColor}
        allowFontScaling={false}
        autoCapitalize="none"
        // keyboardType="numeric"
        underlineColorAndroid="transparent"
        returnKeyType="done"
        onChangeText={text => setPassword(text)}
      />
      <LoginButton>
        <LoginText>LoginScreen</LoginText>
      </LoginButton> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
