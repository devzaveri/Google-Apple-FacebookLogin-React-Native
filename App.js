import {View, StatusBar, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
// import RouterComponent from './src/Router/Router';
import Loader from './src/Component/Loader';
import {Colors, Responsive} from './src/Theme';
import AppStack from './src/Router/AppStack';
import AuthStack from './src/Router/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
const statusBarHeight =
  Platform.OS === 'ios'
    ? Responsive.isIPhoneX()
      ? 50
      : 23
    : StatusBar.currentHeight;
export default function App() {
  const [loader, setLoader] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {loader ? (
          <Loader isLoading={loader} />
        ) : isAuth ? (
          // <AppStack />
          <AuthStack isAuth={isAuth} />
        ) : (
          <AuthStack isAuth={isAuth} />
        )}
      </NavigationContainer>
    </View>
  );
}