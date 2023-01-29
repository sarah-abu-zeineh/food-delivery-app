import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import CreateContainer from "./pages/CreateComponent";
import MainContainer from "./pages/MainContainer";

import {AnimatePresence} from 'framer-motion'

function App() {
    return (
        <AnimatePresence exitBeforeEnter>
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
