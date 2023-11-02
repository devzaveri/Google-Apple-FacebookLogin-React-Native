import {startMapper} from 'react-native-reanimated';
import {
  Add_Cart_Item,
  Add_To_Cart,
  Remove_To_Cart,
  Add_Address_Main,
  Payment_Methoad_Main,
  Shipping_Main,
  Language_Main
} from './constanse';

const initialState = [];
const languageInitial = "en"

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      console.log('AddToCart');
      return [...state, action.payload];

    case Remove_To_Cart:
      console.log('RemoveToCart');
      let newstate = [...state];
      newstate.splice(action.payload, 1);
      return newstate;

    default:
      return state;
  }
};

export const reduce2 = (state = initialState, action) => {
  switch (action.type) {
    case Add_Cart_Item:
      console.log('AddedToCart');
      return [...state, action.payload];
    default:
      return state;
  }
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Address_Main:
      console.log('Add_Address_Main');
      return [...state, action.payload];
      case Payment_Methoad_Main:
        console.log("Payment_Methoad_Main");
        return [...state , action.payload];
    case Shipping_Main:
        console.log("Shipping_Main");
        return [...state , action.payload]
    default:
      return state;
  }
};

export const addLanguage = (state = languageInitial,action) => {
  switch (action.type){
    case Language_Main: 
    console.log("Language_Main");
    if(state === "en"){
      state = 'es'
      console.log("ES==>");
    } else {
      state = "en"
      console.log("EN==>");
    }
    return state
    default:
      return state
  }
}