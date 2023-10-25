import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ContainerView,
  MainHeaderView,
  LogoutView,
  LogoutTouchableOpacity,

} from './HomeStyle';

export default function Home({navigation}) {
  const [username, getUserName] = useState('');

  useEffect(() => {
    fetchdata();
  }, []);
  async function fetchdata() {
    const GetData = await AsyncStorage.getItem('Data');
    const DataArr = JSON.parse(GetData);
    const name = DataArr.name;
    getUserName(name);
  }

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('Data');
      console.log(`Data with key  removed successfully`);
      navigation.navigate('App');
    } catch (error) {
      console.error(`Error removing data for key :`, error);
    }
  };

  const HeaderView = () => {
    return (
      <MainHeaderView>
        <Text style={{fontFamily: Fonts.fonts.themeFontBold}}>
          Wellcome, {username}
        </Text>
        <LogoutView>
        <LogoutTouchableOpacity onPress={remove}></LogoutTouchableOpacity>
        </LogoutView>
      </MainHeaderView>
    );
  };

  return <ContainerView>{HeaderView()}</ContainerView>;
}
