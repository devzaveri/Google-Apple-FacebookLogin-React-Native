import { User_Name } from "./types";

export const userNames = name => {
    return {
        type: User_Name,
        payload: name
    }
}