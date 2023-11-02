import { HeaderMainiView,
    BackbtnView,
    TitleView,
    MenuView,
    BackBtnImg,
    TitleText,
    MainView,
    AddressText,
    AddressDetailsView,
    FirstAdderss,
    SecondAddress,
    ThirdAdderss,
    MainItemView,
    ItemText,
    ItemContainer,
    ItemImg,
    ItemDetailsView,
    ItemNameText,
    ItemDetailsText,
    ItemPriceText,
    CountView,
    CloseBTN,
    CloseImg,
    CountText,
    PaymentContainer,
    PaymentText,
    PaymentImg,
    ShippingContainer,
    ShippingText,
    ShippingImg,
    EmptyLFMainView,
    ShopNowBtn,
    ShopNowText,
    SheetMainView,
    SizeView,
    SizeText,
    SizeTypeView,
    SizeFlatlist,
    SizeButton,
    ColorView,
    ColorText,
    ColorFlatlist,
    ColorButton,
    TotalView,
    TotalText,
    TotleCountView,
    PlusButton,
    MinusImage,
    TotalCountTextView,
    TotleCountText,
    MinusButton,
    PlusImage,
    DashLineView,
    TPView,
    TotalPaymentText,
    TPAmountView,
    TPamountText,
    PaymentBTNView,
    PaymentButton,
    PaymentTetx,
} from './Orderstyle'

import React, { useEffect, useRef, useState } from "react";
import {View , Text, ScrollView, Image, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import RBSheet, {BottomSheetScrollView} from 'react-native-raw-bottom-sheet';

import {Colors, Responsive, Fonts, Images } from '../../Theme';

const Order = ({navigation}) => {
    const cartItem = useSelector(state => state.reducer);
    const cartItem2 = useSelector(state => state.addressReducer);
    const [delivery , setDelivery1] = useState('')
    const [city , setCity] = useState('')
    const [zip , setZip] = useState('')
    const [shippingimg , setShippingImg] = useState('')
    const [methodImg , setMethodImg] = useState('')

    const refRBSheet = useRef();


    useEffect(()=>{
        const firstAdd = cartItem2[0].map(item => item.Delivery1)
        const secondAdd = cartItem2[0].map(item => item.city1)
        const third = cartItem2[0].map(item => item.zip1)
        setDelivery1(firstAdd)
        setCity(secondAdd)
        setZip(third)
        const Method = cartItem2[1].Methodsimg
        console.log(cartItem2);
        setMethodImg(Method);
        const Ship = cartItem2[2].ShippingMethoadImg
        setShippingImg(Ship)
    },[])

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
          <TitleText>Order</TitleText>
        </TitleView>
        <MenuView />
      </HeaderMainiView>
    );
    }
    const MainContainerfunc = () => {
      return(
        <MainView>
            <AddressText>Address</AddressText>
            <AddressDetailsView>
              <FirstAdderss>{delivery}</FirstAdderss>
              <SecondAddress>{city}</SecondAddress>
              <ThirdAdderss>{zip}</ThirdAdderss>
            </AddressDetailsView>
            <MainItemView>
              <ItemText>Items</ItemText>
              <ItemContainer>
                <FlatList data={cartItem} renderItem={({item}) => {
                  return(
                    <View style={{
                      flexDirection: 'row',
                      marginTop:20
                    }}>
                    <ItemImg source={item.img} />
                    <ItemDetailsView>
                      <ItemNameText>{item.name}</ItemNameText>
                      <ItemDetailsText>{item.type}</ItemDetailsText>
                      <ItemPriceText>${item.price}</ItemPriceText>  
                    </ItemDetailsView>
                    <CountView>
                      <CloseBTN>
                        <CloseImg source={Images.close} />
                      </CloseBTN>
                      <CountText>1</CountText>
                    </CountView>
                    </View>
                  )
                }} />
              </ItemContainer>
              <PaymentContainer>
                <PaymentText>Payment Method</PaymentText>
                <PaymentImg source={methodImg} />
              </PaymentContainer>
              <ShippingContainer>
                <ShippingText>Shipping Services</ShippingText>
                <ShippingImg source={shippingimg} />
              </ShippingContainer>
            </MainItemView>
        </MainView>
    )
  }

  const CheckoutBottomSheetFunc = () => {
    return (
      <ScrollView>
     <View>
      <Text>Hello</Text>
     </View>
      </ScrollView>
    );
  };
  const emptyListFooterFunc = () => {
    return (
      <EmptyLFMainView>
        <ShopNowBtn
         onPress={() => refRBSheet.current.open()}>
          <ShopNowText>Continue</ShopNowText>
        </ShopNowBtn>
        <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              dragFromTopOnly={true}
              customStyles={{
                container: {
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  height: 330,
                },
                wrapper: {
                  //   backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#D8D8D8',
                  width: 40,
                  height: 4,
                },
              }}>
              <ScrollView>
                {/* <YourOwnComponent /> */}
                {CheckoutBottomSheetFunc()}
              </ScrollView>
            </RBSheet>
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
            <ScrollView showsVerticalScrollIndicator={false}>
            {HeaderViewFunc()}
            {MainContainerfunc()}
            </ScrollView>
            {emptyListFooterFunc()}
        </View>
    )
}

export default Order 
