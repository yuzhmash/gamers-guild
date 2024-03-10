import {Route, Routes, useLocation} from "react-router-dom";

import {StartPage, Error, BrädspelPage, Godis, Lek, Pussel, GamesWorkshop, Kontakt} from "../pages"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Form from "../form/Form";

const App = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Routes >
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/brädspel" element={<BrädspelPage/>}/>
                    <Route path="/godis" element={<Godis/>}/>
                    <Route path="/lek" element={<Lek/>}/>
                    <Route path="/pussel" element={<Pussel/>}/>
                    <Route path="/gamesworkshop" element={<GamesWorkshop/>}/>
                    <Route path="/kontakt" element={<Kontakt/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </main>
            {useLocation().pathname === "/kontakt" ? null : <Footer/>}
            <Form/>
        </>
    )
}

export default App;