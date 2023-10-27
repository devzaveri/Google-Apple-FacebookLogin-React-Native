import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ContainerView,
  MainHeaderView,
  LogoutView,
  LogoutTouchableOpacity,
  HVMainView,
  SearchTextInput,
  NotifView,
  SearchView,
  NotifInnerview,
  BView,
  CView,
  FlatView,
  FlatItemTouchable,
  FlatText,
} from './HomeStyle';
import {SearchBar, Icon} from 'react-native-elements';
import ProductData from '../../Theme/ProductData';

export default function Home({navigation}) {
  const [username, getUserName] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const Data = ['All', 'Category', 'Top', 'Recomendation'];

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

  const HeaderViewFunc = () => {
    return (
      <HVMainView>
        <SearchView>
          <Image
            source={require('../../icon/Search.png')}
            style={{
              height: 24,
              width: 24,
              tintColor: '#AAAAAA',
            }}
            resizeMode="contain"></Image>
          <SearchTextInput placeholder="Find your product"></SearchTextInput>
        </SearchView>

        <NotifView>
          <NotifInnerview>
            <Image
              source={require('../../icon/Notification.png')}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </NotifInnerview>
        </NotifView>
      </HVMainView>
    );
  };

  const BannerviewFunc = () => {
    return (
      <BView>
        <Image
          source={require('../../icon/1.png')}
          style={{
            height: 150,
            width: '98%',
          }}
          resizeMode="contain"
        />
      </BView>
    );
  };

  const IndexSelection = item => {
    // console.log('Selected Item Index:', item);
    setSelectedItemIndex(item);
  };

  const CatagaresFunc = () => {
    return (
      <CView
        data={Data}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <FlatView>
              <FlatItemTouchable
                onPress={() => IndexSelection(index)}
                select={selectedItemIndex === index}>
                <FlatText>{item}</FlatText>
              </FlatItemTouchable>
            </FlatView>
          );
        }}
      />
    );
  };

  const HeaderView = () => {
    return (
      <MainHeaderView>
        {HeaderViewFunc()}
        {BannerviewFunc()}
      </MainHeaderView>
    );
  };

  const ProductDetailsFunc = () => {
    return (
      <View
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}>
        <FlatList
          data={ProductData}
          numColumns={2}
          columnWrapperStyle={{columnGap: 10}}
          renderItem={({item, index}) => {
            // console.log(item);
            return (
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate("Details" , {ItemName: item.name})
              }}
                style={{
                  paddingBottom: 20,
                  width: 152,
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: index % 2 ? 20 : 0,
                }}>
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    height: 192,
                    width: 152,
                    borderRadius: 15,
                  }}
                />
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: '#fff',
                    borderRadius: 75,
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../icon/Heart.png')}
                    style={{
                      height: 16,
                      width: 16,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    marginTop: 5,
                    color: '#FF7465',
                  }}>
                  ${item.price}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <ContainerView>
      <ScrollView
        style={{
          height: '100%',
        }}>
        {HeaderView()}
        {CatagaresFunc()}
        {ProductDetailsFunc()}
      </ScrollView>
    </ContainerView>
  );
}
