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
  // LoginButton,
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
import {Images, ScreenName} from '../../Theme';
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import appleAuth, {
  AppleAuthCredentialState,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleButton,
} from "@invertase/react-native-apple-authentication";


import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {LoginButton, AccessToken , LoginManager} from 'react-native-fbsdk';
import user from '../../../json/UserData.json';

export default function LoginScreen({navigation}) {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [userName, setUserName] = useState('');
  const [mainId, setMailId] = useState('');
  const [photo, setPhoto] = useState('');
  const [data, setData] = useState();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [userInfos, setUserInfos] = useState({});

  const LoginGoogle = () => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '1089775330350-oqi7v5k5utl1am0nm50g82r5mq69s8rv.apps.googleusercontent.com',
      iosClientId:
        '1089775330350-oqi7v5k5utl1am0nm50g82r5mq69s8rv.apps.googleusercontent.com',
      offlineAccess: true,
    });
    _signIn();
  };

 

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken, user} = await GoogleSignin.signIn();

      setloggedIn(true);
      // console.log('UserInfor()()++>', user);
      setUserName(user.name);
      setMailId(user.email);
      setPhoto(user.photo);
      saveData(user.name, user.email, user.photo);
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


  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          if (data) {
            const accessToken = data.accessToken.toString();
            const userId = data.userID;
        
            fetch(`https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${accessToken}`)
              .then(response => response.json())
              .then(userData => {
                console.log(userData);
                // Now, you have the user information in the `userData` object



              })
              .catch(error => {
                console.error(error);
              });
          }
        });
      }
    } catch (error) {
      console.error('Error during Facebook login:', error);
    }
  };

  const UserEmailFunc = item => {
    setMail(item.toLowerCase());
  };
  const userPassFunc = item => {
    setPass(item);
  };

  const saveData = async (name, email, photos) => {
    try {
      const Data = await AsyncStorage.setItem(
        'Data',
        JSON.stringify({
          name: name,
          email: email,
          photo: photos,
        }),
      );

      alert('Data stored');
      navigation.navigate('App');
    } catch (e) {
      console.error(e);
      alert('Failed to save the data to the storage');
    }
  };

  const AuthStackNavigation = () => {
    return <AuthStack isAuth={isAuth} />;
  };

  const onAppleButtonPress = async () => {
    // Make a request to apple.
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    
    console.log("Helloo==2");
    
    // Get the credential for the user.
    // const credentialState = await appleAuth.getCredentialStateForUser(
    //   appleAuthRequestResponse.user
    //   );

    // If the Auth is authorized, we call our API and pass the authorization code.
    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      console.log("Inside");
      console.log(appleAuthRequestResponse.authorizationCode);

      axios.post("http://172.20.10.9:3000/auth/apple", {
        token: appleAuthRequestResponse.authorizationCode,
      }).then((res) => {
        if (res?.data?.user) {
          console.log(res);
          Alert.alert('Number of connections: ' + res.data.user.nbOfConnections.toString());
        }
      });
    }
  };

  const loginCheck = async () => {
    const founder = user.user.find(model => model.email == mail);
    if (founder) {
      if (founder.password === pass) {
        console.log('Login...');
        await AsyncStorage.setItem('Data', JSON.stringify(founder));
        navigation.navigate('App');
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('Incorrect Email');
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
              navigation.navigate(ScreenName.SignUpScreen);
            }}>
            <HcSignUpText> Sign Up</HcSignUpText>
          </HcSignUpTouchale>
        </HCAccView>
        <SMView>
          <GoogleTouchable onPress={LoginGoogle}>
            <GoogleImg source={Images.google}></GoogleImg>
          </GoogleTouchable>
          {/* <AppleTouchable
            onPress={() => {
              onAppleButtonPress();
            }}>
            <AppleImg source={Images.apple}></AppleImg>
          </AppleTouchable> */}
           <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160,
          height: 45,
        }}
        onPress={() => onAppleButtonPress()}
      />
          <FacebookTouchable
            onPress={handleFacebookLogin}>
            <FacebookImg source={Images.facebook}></FacebookImg>
          </FacebookTouchable>
          {/* <LoginButton
        
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  if (data) {
                    const accessToken = data.accessToken.toString();
                    const userId = data.userID;
                
                    fetch(`https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${accessToken}`)
                      .then(response => response.json())
                      .then(userData => {
                        console.log(userData);
                        // Now, you have the user information in the `userData` object



                      })
                      .catch(error => {
                        console.error(error);
                      });
                  }
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          /> */}
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
            <EmailTextInput
              onChangeText={item => {
                UserEmailFunc(item);
              }}></EmailTextInput>
          </EmailView>
          <PassView>
            <PassText>Password</PassText>
            <PassTextInput
              onChangeText={item => {
                userPassFunc(item);
              }}></PassTextInput>
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
          <LoginTouchable
            onPress={() => {
              // navigation.navigate('App')
              loginCheck();
            }}>
            <LoginBtnText>Login</LoginBtnText>
          </LoginTouchable>
        </LoginButtonView>
      </View>
    );
  };

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
