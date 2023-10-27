import { Add_To_Cart , Remove_To_Cart } from "./constanse";

const initialState = []

export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case Add_To_Cart:
            console.log("AddToCart");
            return [...state , action.payload]
            
        case Remove_To_Cart:
            console.log("RemoveToCart");
            let newstate = [...state];
            newstate.splice(action.payload , 1);
            return newstate
        default:
            return state;
    }
}