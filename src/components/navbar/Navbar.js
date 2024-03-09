import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import "./navbar.sass"

const Navbar = () => {

    const arrBtns = ["/brädspel", "/godis", "/lek", "/pussel", "/gamesworkshop", "/kontakt"]
    const loc = useLocation().pathname
    const location = /\/(br%C3%A4dspel|godis|lek|pussel|gamesworkshop|kontakt|$)/.test(useLocation().pathname)

    useEffect(() => {
        document.body.style.backgroundColor = location ? "black" : "white"
    }, [loc])

    const btns = arrBtns.map((elem, i) => {
        return <li key={i+1}><NavLink end to={elem} className={location ? "white" : "black"} >
            {elem !== "gamesworkshop" ? elem.replace(/\//,"") : "games workshop"}</NavLink></li>
    })

    return (
        <div className="container" >
            <nav className="header__nav">
                <ul>
                    <li key={0} ><NavLink end to="/" className={location ? "white" : "black"} >start</NavLink></li>
                    {btns}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;