import { User_Name } from "./types";

const initialState = {
    name: '',
    userInfo: []
}

const infoReducer = (state = initialState , action) => {
    switch(action.type) {
        case User_Name: 
        console.log("Data is added ");
        return {
            ...state,
            userInfo: state.userInfo.concat({
                value: action.payload
            })
        }
        default: 
        return state
    }
}

export default infoReducer