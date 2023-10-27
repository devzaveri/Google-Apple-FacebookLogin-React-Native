import { Add_To_Cart , Remove_To_Cart } from "./constanse";

export function addToCartMain(item){
    return{
        type: Add_To_Cart,
        payload: item
    }
}

export function removeToCartMain(item){
    return{
        type: Remove_To_Cart,
        payload: item
    }
}