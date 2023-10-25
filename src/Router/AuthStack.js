import React from 'react';
import {ToastAndroid, BackHandler} from 'react-native';

// import {Router, Scene, Stack, Drawer, Actions} from 'react-native-router-flux';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName, Colors} from '../Theme';

import LoginScreen from '../LoginFlow/LoginScreen/LoginScreen';
import SplashScreen from '../LoginFlow/SplashScreen/SplashScreen';
import SignUpScreen from '../LoginFlow/SignUpScreen/SignUpScreen'; 
import ForgotPassword from '../LoginFlow/ForgotPassword/ForgotPassword';
import OTPScreen from '../LoginFlow/OTPScreen/OTPScreen';
import ResetPassword from '../LoginFlow/ResetPassword/ResetPassword';
import App from '../../App';


// Main Navigation Flow
export default function AuthStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      name={ScreenName.AuthRoot}
      initialRouteName={ScreenName.LoginScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenName.SplashScreen}
        key={ScreenName.SplashScreen}
        component={SplashScreen}
        initial
      />
      <Stack.Screen
        name={ScreenName.App}
        key={ScreenName.App}
        component={App}
        initial
      />
      <Stack.Screen
        name={ScreenName.LoginScreen}
        key={ScreenName.LoginScreen}
        component={LoginScreen}
        initial
      />
      <Stack.Screen
        name={ScreenName.SignUpScreen}
        key={ScreenName.SignUpScreen}
        component={SignUpScreen}
        initial
      />
      <Stack.Screen
        name={ScreenName.ForgotPassword}
        key={ScreenName.ForgotPassword}
        component={ForgotPassword}
        initial
      />
      <Stack.Screen
        name={ScreenName.OTPScreen}
        key={ScreenName.OTPScreen}
        component={OTPScreen}
        initial
      />
      <Stack.Screen
        name={ScreenName.ResetPassword}
        key={ScreenName.ResetPassword}
        component={ResetPassword}
        initial
      />
     
    </Stack.Navigator>
  );
}
