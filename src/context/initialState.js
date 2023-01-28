import {fetchUser} from "../utils/fetchLocalStorageData";

// define all initial stage of the user
const userInfo = fetchUser()

const initialState = {
    user: userInfo
};
export default initialState
