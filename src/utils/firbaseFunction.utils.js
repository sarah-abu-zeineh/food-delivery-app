import {collection, doc, getDocs, orderBy, query, setDoc} from "firebase/firestore"
import {fireStore} from "../firebase.config"

// Save New Item
const saveItem = async (data) => {
    await setDoc(doc(fireStore, 'foodItems', `${
        Date.now()
    }`), data, {merge: true})
}
const getAllFoodItem = async () => {
    const items = await getDocs(
        query(collection(fireStore,'foodItems'),orderBy('id','desc'))
    )
    console.log(items);
    return items.docs.map((doc)=>doc.data())
}
export {
    saveItem,
    getAllFoodItem
}
