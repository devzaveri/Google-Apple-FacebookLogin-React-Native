import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {
  HeaderMainiView,
  BackbtnView,
  TitleView,
  MenuView,
  BackBtnImg,
  TitleText,
  MenuImg,
  MainViewContainer,
  DeliveryText,
  DeliveryTextInput,
  CityText,
  CityTextinput,
  ZipCodeText,
  ZipCodeTextinput,
  BillingView,
  CheckView,
  CheckTextView,
  CheckBtn,
  BilingText,
  EmptyLFMainView,
  ShopNowBtn,
  ShopNowText,
} from './AddressStyles';

import {Colors, Responsive, Fonts, Images} from '../Theme';
import {useSelector, useDispatch} from 'react-redux';
import {addAddressMain} from '../redux/action';

const Address = ({navigation}) => {
  const [isChecked, setIsSchecked] = useState(false);
  const [delivery, setDelivery] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const dispatch = useDispatch();

  const CheckFunction = () => {
    setIsSchecked(!isChecked);
  };

  const DeliveryTextFunc = text => {
    setDelivery(text);
  };

  const CityTextFunc = text => {
    setCity(text);
  };

  const ZipCodeTextFunc = text => {
    setZip(text);
  };

  const AddDeliveryAddressFunc = () => {
    if (delivery === '') {
      Alert.alert('Add Delivery Address');
    } else if (city === '') {
      Alert.alert('Add City');
    } else if (zip === '') {
      Alert.alert('Add Zip');
    } else {
      const allDetails = [
        {
          Delivery1: delivery,
          city1: city,
          zip1: zip,
        },
      ];
      dispatch(addAddressMain(allDetails))
      navigation.navigate('PaymentMethod')
    }
  };

  const HeaderViewFunc = () => {
    return (
      <HeaderMainiView>
        <BackbtnView
          onPress={() => {
            navigation.goBack();
          }}>
          <BackBtnImg source={Images.back}></BackBtnImg>
        </BackbtnView>
        <TitleView>
          <TitleText>Address</TitleText>
        </TitleView>
        <MenuView />
      </HeaderMainiView>
    );
  };

  const MainBodyFunc = () => {
    return (
      <MainViewContainer>
        <DeliveryText>Delivery</DeliveryText>
        <DeliveryTextInput
          onChangeText={text => DeliveryTextFunc(text)}></DeliveryTextInput>
        <CityText>City</CityText>
        <CityTextinput
          onChangeText={text => CityTextFunc(text)}></CityTextinput>
        <ZipCodeText>Zip Code</ZipCodeText>
        <ZipCodeTextinput
          onChangeText={text => ZipCodeTextFunc(text)}></ZipCodeTextinput>
        <BillingView>
          <CheckView>
            <CheckBtn
              CheckedOrnot={isChecked}
              onPress={CheckFunction}></CheckBtn>
          </CheckView>
          <CheckTextView>
            <BilingText>Billing Address same as Delivery</BilingText>
          </CheckTextView>
        </BillingView>
      </MainViewContainer>
    );
  };
  const emptyListFooterFunc = () => {
    return (
      <EmptyLFMainView>
        <ShopNowBtn
          onPress={() => {
            AddDeliveryAddressFunc();
          }}>
          <ShopNowText>Payment</ShopNowText>
        </ShopNowBtn>
      </EmptyLFMainView>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
      }}>
      <ScrollView style={{}}>
        {HeaderViewFunc()}
        {MainBodyFunc()}
      </ScrollView>
      {emptyListFooterFunc()}
    </View>
  );
};
export default Address;
