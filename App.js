import {View, StatusBar, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
// import RouterComponent from './src/Router/Router';
import Loader from './src/Component/Loader';
import {Colors, Responsive} from './src/Theme';
import AppStack from './src/Router/AppStack';
import AuthStack from './src/Router/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore()

const statusBarHeight =
  Platform.OS === 'ios'
    ? Responsive.isIPhoneX()
      ? 50
      : 23
    : StatusBar.currentHeight;
 
export default function App() {
  const [loader, setLoader] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [data , setData] = useState()

  useEffect(()=>{
    getUser()
    // console.log("Hello");
  } , [])
  
  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("Data");
      const currentUser = JSON.parse(savedUser);
      // console.log('currentUser==>',currentUser);
      setData(currentUser)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={{flex: 1}}>
      <NavigationContainer independent={true}>
      <Provider store = { store }>
        {/* {loader ? (
          <Loader isLoading={loader} />
        ) : isAuth ? (
          // <AppStack />
          <AuthStack isAuth={isAuth} />
        ) : (
          <AuthStack isAuth={isAuth} />
        )} */}
         {loader ? (
          <Loader isLoading={loader} />
        ) : data === null ?  <AuthStack isAuth={isAuth} /> :  isAuth ? (
          <AppStack />
        ) : (
          <AuthStack isAuth={isAuth} />
        )}
        </Provider>
      </NavigationContainer>
    </View>
  );
}