import {MdNoMealsOuline} from "react-icons/md";
import {fetchCart, fetchUser} from "../utils/fetchLocalStorageData";

// define all initial stage of the user
const userInfo = fetchUser()
const cartInfo = fetchCart()

const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems:cartInfo
};
export default initialState
