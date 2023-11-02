import {
  Add_To_Cart,
  Remove_To_Cart,
  Add_Cart_Item,
  Add_Address_Main,
  Payment_Methoad_Main,
  Shipping_Main,
  Language_Main
} from './constanse';

export function addToCartMain(item) {
  return {
    type: Add_To_Cart,
    payload: item,
  };
}

export function removeToCartMain(item) {
  return {
    type: Remove_To_Cart,
    payload: item,
  };
}

export function addCartItemMain(item) {
  return {
    type: Add_Cart_Item,
    payload: item,
  };
}

export function addAddressMain(item) {
  return {
    type: Add_Address_Main,
    payload: item,
  };
}
export function addpaymentMain(item){
    return {
        type: Payment_Methoad_Main,
        payload: item
    }
}
export function addshippingMain(item){
    return{
        type: Shipping_Main,
        payload: item
    }
}
export function addLanguageMain(item){
  return{
    type: Language_Main,
    payload: item
  }
}