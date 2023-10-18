import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {Colors, ScreenName} from '../Theme';

// screen list
// import LoginScreen from '../Container/LoginFlow/Login/Login';
import LoginScreen from '../LoginFlow/LoginScreen/LoginScreen';
import IntroFirst from '../LoginFlow/IntroScreen/IntroFirst/IntroFirst';
import IntroSecond from '../LoginFlow/IntroScreen/IntroSecond/IntroSecond';
import IntroThird from '../LoginFlow/IntroScreen/IntroThird/IntroThird';
import SplashScreen from '../LoginFlow/SplashScreen/SplashScreen';
import Home from '../MainFlow/Home/Home';
import SignUpScreen from '../LoginFlow/SignUpScreen/SignUpScreen';
import ForgotPassword from '../LoginFlow/ForgotPassword/ForgotPassword';
import ResetPassword from '../LoginFlow/ResetPassword/ResetPassword';
import OTPScreen from '../LoginFlow/OTPScreen/OTPScreen';


// Main Navigation Flow
export default function RouterComponent({isAuthed}) {
  const backAction = () => {
    let screeName = Actions.currentScene;
    if (screeName === ScreenName.LoginScreen) {
      BackHandler.exitApp();
    } else if (screeName === ScreenName.HomeScreen) {
      BackHandler.exitApp();
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <Router sceneStyle={{backgroundColor: Colors.white}}>
      <Stack>
        <Scene hideNavBar key="auth" initial={!isAuthed}>
          <Scene
            key={ScreenName.SplashScreen}
            component={SplashScreen}
            isAuth={isAuthed}
            initial
          />
          <Scene
            key={ScreenName.ForgotPassword}
            component={ForgotPassword}
            // isAuth={isAuthed}
            initial
          />
          <Scene
            key={ScreenName.IntroFirstScreen}
            component={IntroFirst}
            hideNavBar
          />
          <Scene
            key={ScreenName.IntroSecondScreen}
            component={IntroSecond}
            hideNavBar
          />
          <Scene
            key={ScreenName.IntroThirdScreen}
            component={IntroThird}
            hideNavBar
          />

          <Scene key={ScreenName.LoginScreen} component={LoginScreen} />
          <Scene key={ScreenName.SignUpScreen} component={SignUpScreen} />
          <Scene key={ScreenName.ResetPassword} component={ResetPassword} />
          <Scene key={ScreenName.OTPScreen} component={OTPScreen} />
        
        </Scene>

        <Scene hideNavBar key="root" gesturesEnabled={false} initial={isAuthed}>
          <Stack>
            <Scene
              key={ScreenName.HomeScreen}
              component={Home}
              swipeEnabled={false}
              hideNavBar
            />
          </Stack>
        </Scene>
      </Stack>
    </Router>
  );
}
