import React, { useState } from "react";
import {View , Text, ScrollView} from 'react-native'
import { HeaderMainiView,
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
} from './AddressStyles'

    import {Colors, Responsive, Fonts, Images} from '../Theme';


const Address = ({navigation}) => {
    const [isChecked , setIsSchecked] = useState(false)


    const CheckFunction = () => {
        setIsSchecked(!isChecked)
    }
    console.log(isChecked);

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
    
      const MainBodyFunc =() => {
        return(
            <MainViewContainer>
                <DeliveryText>Delivery</DeliveryText>
                <DeliveryTextInput></DeliveryTextInput>
                <CityText>City</CityText>
                <CityTextinput></CityTextinput>
                <ZipCodeText>Zip Code</ZipCodeText>
                <ZipCodeTextinput></ZipCodeTextinput>
                <BillingView>
                    <CheckView>
                        <CheckBtn CheckedOrnot={isChecked} onPress={CheckFunction}></CheckBtn>
                    </CheckView>
                    <CheckTextView>
                        <BilingText>Billing Address same as Delivery</BilingText>
                    </CheckTextView>
                </BillingView>
            </MainViewContainer>
        )
      }
      const emptyListFooterFunc = () => {
        return (
          <EmptyLFMainView>
            <ShopNowBtn
              onPress={() => {
                // navigation.navigate('Home');
              }}>
              <ShopNowText>Payment</ShopNowText>
            </ShopNowBtn>
          </EmptyLFMainView>
        );
      };

    return(
        <View style={{
            flex: 1,
            padding: 20,
            paddingTop: 40,
            backgroundColor: '#fff',
        }}>
            <ScrollView style={{
            }} >
            {HeaderViewFunc()}
            {MainBodyFunc()}
            </ScrollView>
            {emptyListFooterFunc()}
        </View>
    )
}
export default Address