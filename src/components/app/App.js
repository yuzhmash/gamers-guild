import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import { useEffect, useState } from "react";

import {StartContent} from "../pages"

import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";
import Navbar from "../navbar/Navbar"

const App = () => {
    // const location = useLocation();

    // // Log the current location object to the console
    // console.log('Current Location:', location);
    return (
            <div>
                <Navbar/>
                <main>
                    <Routes >
                        <Route path="/" element={<StartContent/>}/>
                        <Route path="/brädspel" element={<MainContent title={"brädspel"} />}/>
                        <Route path="/godis" element={<MainContent title={"godis"} />}/>
                        <Route path="/lek" element={<MainContent title={"lek"} />}/>
                        <Route path="/pussel" element={<MainContent title={"pussel"} />}/>
                        <Route path="/kontakt" element={<Footer style={{"borderTop": "none", "backgroundColor": "#000"}} title={"kontakt"} />}/>
                        <Route path="/omgamersguild" element={<MainContent title={"om gamers guild"} />}/>
                    </Routes>
                </main>
                {useLocation().pathname === "/kontakt" ? null : <Footer/>}
            </div>
    )
}

export default App;