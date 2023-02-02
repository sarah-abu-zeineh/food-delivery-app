import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import CreateContainer from "./pages/CreateComponent";
import MainContainer from "./pages/MainContainer";

import {AnimatePresence} from 'framer-motion'
import {useStateValue} from "./context/stateProvider";
import {async} from "@firebase/util";
import {getAllFoodItem} from "./utils/firbaseFunction.utils";
import {useEffect} from "react";
import {actionType} from "./context/reducer";

function App() {
    const [
        {
            foodItems,
            cartItems
        }, dispatch
    ] = useStateValue();
    console.log(cartItems, "sara");
    const fetchData = async () => {
        await getAllFoodItem().then(data => {
            dispatch({type: actionType.SET_FOOD_ITEMS, foodItems: data})
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AnimatePresence>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header/>
                <main className="mt-14 md:mt-20 px-4
                                                                                         md:px-8 py-4 w-full">
                    <Routes>
                        <Route path='/*'
                            element={<MainContainer/>}/>
                        <Route path='/createItem'
                            element={<CreateContainer/>}/>
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;
