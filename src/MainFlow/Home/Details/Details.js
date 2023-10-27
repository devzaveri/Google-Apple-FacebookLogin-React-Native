import React, {useRef, useState} from 'react';
import {
  MainViewcontainer,
  HIMainView,
  MainImgBackground,
  BackView,
  BackImg,
  LiveView,
  LikeImg,
  DMainView,
  FirstDetailsView,
  NameView,
  PriceView,
  ProductnameView,
  ProductType,
  PriceText,
  ProductdetailsView,
  ProductDetailsText,
  FooterMainView,
  FInnerView,
  FCartView,
  FByNowView,
  FCartinnerCircleView,
  CartImg,
  FButInnerView,
  FBuyText,
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
} from './DetailsStyle';

import {View, Text, Image, ScrollView, Alert} from 'react-native';
import {Rating} from 'react-native-ratings';
import RBSheet, {BottomSheetScrollView} from 'react-native-raw-bottom-sheet';
import DashedLine from 'react-native-dashed-line';
import {color} from 'react-native-elements/dist/helpers';

import ProductData from '../../../Theme/ProductData';
import Size from '../../../Theme/Productsize';
import Color from '../../../Theme/ProductColor';
import {useDispatch, useSelector} from 'react-redux';
import { addToCartMain , removeToCartMain } from '../../../redux/action';

const Details = ({navigation, route}) => {
  const receivedData = route.params?.ItemName;
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const [sizeSelected, setSizeSelected] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(1);
  const cartItem = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const Data = ProductData.find(item => item.name === receivedData);

  //item add remove function
  const PlusCountFunc = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const MinusCountFunc = () => {
    if (count <= 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  //onPress methods

  const HeaderImageViewFunc = () => {
    return (
      <HIMainView>
        <MainImgBackground
          resizeMode="cover"
          source={Data.img}
          imageStyle={{
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            // height:"100%"
          }}>
          <BackView
            onPress={() => {
              navigation.goBack();
            }}>
            <BackImg
              source={require('../../../icon/Back.png')}
              resizeMode="contain"
            />
          </BackView>
          <LiveView>
            <LikeImg source={require('../../../icon/Heart.png')}></LikeImg>
          </LiveView>
        </MainImgBackground>
      </HIMainView>
    );
  };

  const DetailsFunc = () => {
    return (
      <DMainView>
        <FirstDetailsView>
          <NameView>
            <ProductnameView>{Data?.name}</ProductnameView>
            <ProductType>{Data.type}</ProductType>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={25}
              style={{
                marginTop: 10,
                alignSelf: 'flex-start',
              }}
            />
          </NameView>
          <PriceView>
            <PriceText>${Data.price}</PriceText>
          </PriceView>
        </FirstDetailsView>
      </DMainView>
    );
  };

  const MainDetailsFunc = () => {
    return (
      <ProductdetailsView>
        <ProductDetailsText>{Data.details}</ProductDetailsText>
      </ProductdetailsView>
    );
  };

  const FooterView = () => {
    return (
      <FooterMainView>
        <FInnerView>
          <FCartView>
            <FCartinnerCircleView onPress={() => refRBSheet2.current.open()}>
              <CartImg source={require('../../../icon/Buy.png')} />
            </FCartinnerCircleView>
            <RBSheet
              ref={refRBSheet2}
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
          </FCartView>
          <FByNowView>
            <FButInnerView onPress={() => refRBSheet.current.open()}>
              <FBuyText>Buy Now</FBuyText>
            </FButInnerView>
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
              <ScrollView>{BuyNowBottomSheetFunc()}</ScrollView>
            </RBSheet>
          </FByNowView>
        </FInnerView>
      </FooterMainView>
    );
  };
  const SetSizeitemFunc = index => {};

  const CheckoutBottomSheetFunc = () => {
    return (
      <ScrollView>
        <SheetMainView>
          <SizeView>
            <SizeText>Size</SizeText>
            <SizeTypeView>
              <SizeFlatlist
                data={Size}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <SizeButton
                        onPress={() => setSizeSelected(index)}
                        selected={sizeSelected === index}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: '#000',
                          }}>
                          {item}
                        </Text>
                      </SizeButton>
                    </View>
                  );
                }}></SizeFlatlist>
            </SizeTypeView>
          </SizeView>
          <ColorView>
            <ColorText>Color</ColorText>
            <ColorFlatlist
              data={Color}
              horizontal={true}
              renderItem={({item, index}) => {
                // console.log(item);
                return (
                  <View>
                    <ColorButton
                      onPress={() => setSelectedColor(index)}
                      selectedColor={item}
                      ColorSelected={selectedColor === index}></ColorButton>
                  </View>
                );
              }}></ColorFlatlist>
          </ColorView>
          <TotalView>
            <TotalText>Total</TotalText>
            <TotleCountView>
              <PlusButton onPress={MinusCountFunc}>
                <MinusImage
                  source={require('../../../icon/Vector.png')}
                  getColor={count > 1 ? '#FF7465' : '#AAAAAA'}></MinusImage>
              </PlusButton>
              <TotalCountTextView>
                <TotleCountText>{count}</TotleCountText>
              </TotalCountTextView>
              <MinusButton onPress={PlusCountFunc}>
                <PlusImage
                  resizeMode="contain"
                  source={require('../../../icon/PlusCount.png')}></PlusImage>
              </MinusButton>
            </TotleCountView>
          </TotalView>
          <DashLineView>
            <DashedLine
              dashLength={8}
              dashThickness={1}
              dashGap={5}
              dashColor="#D8D8D8"
            />
          </DashLineView>
          <TPView>
            <TotalPaymentText>Total Payment</TotalPaymentText>
            <TPAmountView>
              <TPamountText>${Data.price}</TPamountText>
            </TPAmountView>
          </TPView>
          <PaymentBTNView>
            <PaymentButton onPress={()=>{
              Alert.alert("This item is added successfully")
              dispatch(addToCartMain(Data));
              
            }}>
              <PaymentTetx>Add To Cart</PaymentTetx>
            </PaymentButton>
          </PaymentBTNView>
        </SheetMainView>
      </ScrollView>
    );
  };

  const BuyNowBottomSheetFunc = () => {
    return (
      <ScrollView>
        <SheetMainView>
          <SizeView>
            <SizeText>Size</SizeText>
            <SizeTypeView>
              <SizeFlatlist
                data={Size}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <SizeButton
                        onPress={() => setSizeSelected(index)}
                        selected={sizeSelected === index}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: '#000',
                          }}>
                          {item}
                        </Text>
                      </SizeButton>
                    </View>
                  );
                }}></SizeFlatlist>
            </SizeTypeView>
          </SizeView>
          <ColorView>
            <ColorText>Color</ColorText>
            <ColorFlatlist
              data={Color}
              horizontal={true}
              renderItem={({item, index}) => {
                // console.log(item);
                return (
                  <View>
                    <ColorButton
                      onPress={() => setSelectedColor(index)}
                      selectedColor={item}
                      ColorSelected={selectedColor === index}></ColorButton>
                  </View>
                );
              }}></ColorFlatlist>
          </ColorView>
          <TotalView>
            <TotalText>Total</TotalText>
            <TotleCountView>
              <PlusButton onPress={MinusCountFunc}>
                <MinusImage
                  source={require('../../../icon/Vector.png')}
                  getColor={count > 1 ? '#FF7465' : '#AAAAAA'}></MinusImage>
              </PlusButton>
              <TotalCountTextView>
                <TotleCountText>{count}</TotleCountText>
              </TotalCountTextView>
              <MinusButton onPress={PlusCountFunc}>
                <PlusImage
                  resizeMode="contain"
                  source={require('../../../icon/PlusCount.png')}></PlusImage>
              </MinusButton>
            </TotleCountView>
          </TotalView>
          <DashLineView>
            <DashedLine
              dashLength={8}
              dashThickness={1}
              dashGap={5}
              dashColor="#D8D8D8"
            />
          </DashLineView>
          <TPView>
            <TotalPaymentText>Total Payment</TotalPaymentText>
            <TPAmountView>
              <TPamountText>${Data.price}</TPamountText>
            </TPAmountView>
          </TPView>
          <PaymentBTNView>
            <PaymentButton>
              <PaymentTetx>Checkout</PaymentTetx>
            </PaymentButton>
          </PaymentBTNView>
        </SheetMainView>
      </ScrollView>
    );
  };

  return (
    <View
      style={{
        height: '100%',
      }}>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        <MainViewcontainer>
          {HeaderImageViewFunc()}
          {DetailsFunc()}
          {MainDetailsFunc()}
        </MainViewcontainer>
      </ScrollView>
      {FooterView()}
    </View>
  );
};

export default Details;
