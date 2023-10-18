import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Fonts from '../../Theme/Fonts';
import {ContainerView} from './HomeStyle';

export default function Home() {
  return (
    <ContainerView>
      <Text style={{fontFamily: Fonts.fonts.themeFontBold}}>Home</Text>
    </ContainerView>
  );
}
