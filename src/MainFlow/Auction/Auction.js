import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Fonts from '../../Theme/Fonts';
import {ContainerView} from './AuctionStyle';

export default function Auction() {
  return (
    <ContainerView>
      <Text style={{fontFamily: Fonts.fonts.themeFontBold}}>Auction</Text>
    </ContainerView>
  );
}
