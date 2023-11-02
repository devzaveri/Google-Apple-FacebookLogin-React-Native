import {
  HeaderMainiView,
  BackbtnView,
  TitleView,
  MenuView,
  BackBtnImg,
  TitleText,
  MainContainerView,
  PaymentMethodText,
  MainInnerview,
  PaymentImageView,
  GpayBtn,
  GPayImg,
  ApplyPayBtn,
  ApplePayImg,
  VisaBtn,
  VisaImg,
  ShippingServicesView,
  ShippingText,
  FexExBtn,
  FexExImg,
  DHLBtn,
  DHLImg,
  EmptyLFMainView,
  ShopNowBtn,
  ShopNowText,
} from './PaymentMethodstyle';
import React from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';

import {Colors, Responsive, Fonts, Images } from '../Theme';

import {useSelector, useDispatch} from 'react-redux';
import {addpaymentMain, addshippingMain} from '../redux/action';

import Methods from '../Theme/Method';
import ShippingMethoad from '../Theme/ShippingMethoad'


const PaymentMethod = ({navigation}) => {
  const dispatch = useDispatch();

  const AddMethoadsFunc = () => {
    navigation.navigate('Order')
  }

  const getMethoadDetailsFunc = (item) => {
    dispatch(addpaymentMain(item));
    
  };

  const getShippingFunc = (item) =>{
    dispatch(addshippingMain(item));
    
  }

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
          <TitleText>Payment</TitleText>
        </TitleView>
        <MenuView />
      </HeaderMainiView>
    );
  };

  const MainContainerFunc = () => {
    return (
      <MainContainerView>
        <MainInnerview>
          <PaymentMethodText>Payment Method</PaymentMethodText>
          <PaymentImageView>
            <FlatList
              data={Methods}
              horizontal
              renderItem={({item}) => {
                // console.log(item.item.img);
                return (
                  <View>
                    <GpayBtn onPress={()=> getMethoadDetailsFunc(item)}>
                      <GPayImg source={item.Methodsimg} />
                    </GpayBtn>
                  </View>
                );
              }}
            />
          </PaymentImageView>
          <ShippingText>Shipping Services</ShippingText>
          <ShippingServicesView>
         <FlatList data={ShippingMethoad} horizontal renderItem={({item})=>{
            return(
                <FexExBtn onPress={()=>getShippingFunc(item)}>
                <FexExImg source={item.ShippingMethoadImg} />
              </FexExBtn>
            )
         }} />
          </ShippingServicesView>
        </MainInnerview>
      </MainContainerView>
    );
  };
  const emptyListFooterFunc = () => {
    return (
      <EmptyLFMainView>
        <ShopNowBtn
          onPress={() => {
            AddMethoadsFunc()
          }}>
          <ShopNowText>Order Now</ShopNowText>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {HeaderViewFunc()}
        {MainContainerFunc()}
      </ScrollView>

      {emptyListFooterFunc()}
    </View>
  );
};
export default PaymentMethod;
