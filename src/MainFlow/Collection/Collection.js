import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Fonts from '../../Theme/Fonts';
import {ContainerView} from './CollectionStyle';

export default function Collection() {
  return (
    <ContainerView>
      <Text style={{fontFamily: Fonts.fonts.themeFontBold}}>Collection</Text>
    </ContainerView>
  );
}
