
import {useEffect} from "react";
import {actionType} from "./context/reducer";
import {Route, Routes} from "react-router-dom";
import {useStateValue} from "./context/stateProvider";


import Header from "./components/header/Header";
import CreateContainer from "./pages/CreateComponent";
import MainContainer from "./pages/MainContainer";

import {AnimatePresence} from 'framer-motion'

import {getAllFoodItem} from "./utils/firebaseFunction.utils";


function App() {
    const [
        {
            foodItems,
            cartItems
        }, dispatch
    ] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItem().then(data => {
            dispatch({type: actionType.SET_FOOD_ITEMS, foodItems: data})
        })
    }
    useEffect(() => {
        fetchData();
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
