import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Fonts from '../../Theme/Fonts';
import {ContainerView} from './ProfileStyle';

export default function Profile() {
  return (
    <ContainerView>
      <Text style={{fontFamily: Fonts.fonts.themeFontBold}}>Profile</Text>
    </ContainerView>
  );
}
