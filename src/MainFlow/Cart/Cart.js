import {
  HeaderMainiView,
  BackbtnView,
  TitleView,
  MenuView,
  BackBtnImg,
  TitleText,
  MenuImg,
  ILMainContainer,
  ILFlatList,
  InnerFLMainView,
  ItemCheckView,
  ContentView,
  CountView,
  CheckBoxBtn,
  ProductImg,
  ProductDetailsView,
  ProductName,
  ProductType,
  ProductPrice,
  MinusBtn,
  MinusImg,
  CountText,
  PlusBtn,
  PlusImg,
  FMainContainer,
  SelectView,
  SelectText,
  SelectCheckOuterView,
  SelectCheckView,
  DashLineView,
  TotalPaymentView,
  PaymentText,
  PriceOuterView,
  PriceText,
  CheckOutOutterView,
  CheckoutView,
  CheckoutText,
} from './CartStyle';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DashedLine from 'react-native-dashed-line';

import {Colors, Responsive, Fonts, Images} from '../../Theme';

const Cart = ({navigation}) => {
  const [cartLenth, setCartLenth] = useState(0);
  const [selecteditem, setSelectedItem] = useState([]);

  const cartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCartLenth(cartData);
  }, [cartData]);
  const GetSelectedItem = (index , item) => {
    const updatedList = selecteditem.includes(item)
      ? selecteditem.filter(cartLenth => cartLenth !== item )
      : [...selecteditem, item];
    setSelectedItem(updatedList);    
    console.log(JSON.stringify(updatedList,null,2));
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
          <TitleText>Cart</TitleText>
        </TitleView>
        <MenuView>
          <MenuImg resizeMode="contain" source={Images.menu}></MenuImg>
        </MenuView>
      </HeaderMainiView>
    );
  };
  const ItemListFunc = () => {
    return (
      <ILMainContainer>
        <ILFlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <InnerFLMainView>
                <ItemCheckView>
                  <CheckBoxBtn
                     selectedItem={selecteditem === index}
                     onPress={() => GetSelectedItem(index , item)}></CheckBoxBtn>
                </ItemCheckView>
                <ContentView>
                  <ProductImg source={item.img} />
                  <ProductDetailsView>
                    <ProductName>{item.name}</ProductName>
                    <ProductType>{item.type}</ProductType>
                    <ProductPrice>${item.price}</ProductPrice>
                  </ProductDetailsView>
                </ContentView>
                <CountView>
                  <MinusBtn>
                    <MinusImg resizeMode="contain" source={Images.minus} />
                  </MinusBtn>
                  <CountText>1</CountText>
                  <PlusBtn>
                    <PlusImg source={Images.plus} />
                  </PlusBtn>
                </CountView>
              </InnerFLMainView>
            );
          }}
        />
      </ILMainContainer>
    );
  };
  const FooterFunc = () => {
    return (
      <FMainContainer>
        <SelectView>
          <SelectText>Select All</SelectText>
          <SelectCheckOuterView>
            <SelectCheckView></SelectCheckView>
          </SelectCheckOuterView>
        </SelectView>
        <DashLineView>
          <DashedLine
            dashLength={8}
            dashThickness={1}
            dashGap={5}
            dashColor="#D8D8D8"
          />
        </DashLineView>
        <TotalPaymentView>
          <PaymentText>Total Payment</PaymentText>
          <PriceOuterView>
            <PriceText>$0.00</PriceText>
          </PriceOuterView>
        </TotalPaymentView>
        <CheckOutOutterView>
          <CheckoutView>
            <CheckoutText>Checkout</CheckoutText>
          </CheckoutView>
        </CheckOutOutterView>
      </FMainContainer>
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
      <ScrollView>
        {HeaderViewFunc()}
        {ItemListFunc()}
      </ScrollView>
      {FooterFunc()}
    </View>
  );
};

export default Cart;
