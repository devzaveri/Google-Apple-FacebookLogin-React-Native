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
  EmptyCartView,
  ECImage,
  EmptyCartTitleText,
  ECDetailsText,
  EmptyLFMainView,
  ShopNowBtn,
  ShopNowText,
} from './CartStyle';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DashedLine from 'react-native-dashed-line';

import {Colors, Responsive, Fonts, Images} from '../../Theme';

const Cart = ({navigation}) => {
  const [cartLenth, setCartLenth] = useState(0);
  const [selecteditem, setSelectedItem] = useState([]);
  const [tPrice, setTPrice] = useState(0);
  const cartData = useSelector(state => state.reducer);
  const [helloItem , sethelloItem] = useState(null)

  useEffect(() => {
    setCartLenth(cartData);
    TotalPriceCountFunc();
  }, [cartData, selecteditem]);
  const GetSelectedItem = (index, item) => {
    const updatedList = selecteditem.includes(item)
      ? selecteditem.filter(cartLenth => cartLenth !== item)
      : [...selecteditem, item];
    setSelectedItem(updatedList);
    // console.log(JSON.stringify(selecteditem,null,2));
    // const isCheckedItem = updatedList.includes(item)
    //   ? updatedList.filter(item => (item.isChacked === false ? true : false))
    //   : [...selecteditem, item];
    // setSelectedItem(updatedList);
  };

  const TotalPriceCountFunc = () => {
    count = 0;
    const total = selecteditem.reduce((acc, price) => acc + price.price, 0);
    setTPrice(total);
  };
  const AllSelectFunc = () => {
    if (selecteditem.length !== 0) {
      setSelectedItem([]); // Deselect all
      console.log('If Part', selecteditem);
    } else {
      const Data = selecteditem.includes(cartData)
        ? selecteditem.filter(cartLenth => cartLenth !== cartData)
        : [...selecteditem, cartData];
      setSelectedItem(Data[0]);
      console.log('elsePart ===>', Data);
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
                    // selectedItem={index}
                    onPress={() => GetSelectedItem(index, item)}></CheckBoxBtn>
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
  const emptyListFunc = () => {
    return (
      <EmptyCartView>
        <ECImage source={Images.emptyCart} resizeMode="contain" />
        <EmptyCartTitleText>Empty Basket</EmptyCartTitleText>
        <ECDetailsText>
          Your basket is still empty, browse the attractive promos from bardeal
        </ECDetailsText>
      </EmptyCartView>
    );
  };
  const FooterFunc = () => {
    return (
      <FMainContainer>
        <SelectView>
          <SelectText>Select All</SelectText>
          <SelectCheckOuterView>
            <SelectCheckView data={selecteditem.length === cartData.length} onPress={AllSelectFunc}></SelectCheckView>
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
            <PriceText>${tPrice}</PriceText>
          </PriceOuterView>
        </TotalPaymentView>
        <CheckOutOutterView>
          {
            selecteditem.length !== 0 ? (
              <CheckoutView getBGcolor={selecteditem.length} onPress={()=>{
                navigation.navigate('Address')
              }} >
              <CheckoutText>Checkout</CheckoutText>
            </CheckoutView>
            ) : (
              <CheckoutView getBGcolor={selecteditem.length} disabled={true} >
              <CheckoutText>Checkout</CheckoutText>
            </CheckoutView>
            )
          }
         
        </CheckOutOutterView>
      </FMainContainer>
    );
  };
  const emptyListFooterFunc = () => {
    return (
      <EmptyLFMainView>
        <ShopNowBtn
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ShopNowText>Shopping Now</ShopNowText>
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
        {cartData.length !== 0 ? ItemListFunc() : emptyListFunc()}
      </ScrollView>
      {cartData.length !== 0 ? FooterFunc() : emptyListFooterFunc()}
    </View>
  );
};

export default Cart;
