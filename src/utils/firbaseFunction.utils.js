import {doc, setDoc} from "firebase/firestore"
import {fireStore} from "../firebase.config"

// Save New Item
const saveItem = async (data) => {
    await setDoc(doc(fireStore, 'foodItem', `${
        Date.now()
    }`), data, {merge: true})
}
export default saveItem
