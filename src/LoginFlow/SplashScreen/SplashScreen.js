import React, {useEffect, useState} from 'react';
// import {Actions} from 'react-native-router-flux';
import {Images, ScreenName} from '../../Theme';
import {
  AppNameText,
  Container,
  TemplateImageView,
  WelcomeText,
  SplashImageView,
} from './SplashScreenStyle';

export default function SplashScreen(props) {
  const [isAuth] = useState(props?.isAuth);
  useEffect(() => {
    setTimeout(() => {
      console.log('setTimeout', props.isAuth);
      if (isAuth) {
        console.log('Login success');
        props?.navigation.navigate(ScreenName.HomeScreen);
        console.log("ScreenName.HomeScreen");
        // Actions.push(ScreenName.HomeScreen);
      } else {
        console.log('Login call');
        // Actions.replace(ScreenName.LoginMainScreen);
        // Actions.push(ScreenName.IntroFirstScreen);
      }
    }, 2000);
  }, []);
  return (
    <Container>
      <TemplateImageView>
        <SplashImageView source={Images.logo} resizeMode="contain" />
        <AppNameText>Template</AppNameText>
      </TemplateImageView>
      <WelcomeText>Welcome</WelcomeText>
    </Container>
  );
}
