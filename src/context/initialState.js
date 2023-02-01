import {MdNoMealsOuline} from "react-icons/md";
import {fetchUser} from "../utils/fetchLocalStorageData";

// define all initial stage of the user
const userInfo = fetchUser()

const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false
};
export default initialState
