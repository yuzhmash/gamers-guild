import { Link, NavLink } from 'react-router-dom';

import "./navbar.sass"

const Navbar = ({onClicked}) => {

    // const arrBtns = ["start", "brädspel", "godis", "lek", "pussel", "kontakt", "om gamers guild"]
    // const btns = arrBtns.map(elem => <li><NavLink>{elem}</NavLink></li>)

    return (
        <div className="container" >
            <nav className="header__nav">
                <ul>
                    <li><NavLink end to="/" >start</NavLink></li>
                    <li><NavLink end to="/brädspel">brädspel</NavLink></li>
                    <li><NavLink end to="/godis">godis</NavLink></li>
                    <li><NavLink end to="/lek">lek</NavLink></li>
                    <li><NavLink end to="/pussel">pussel</NavLink></li>
                    <li><NavLink end to="/kontakt">kontakt</NavLink></li>
                    <li><NavLink end to="/omgamersguild">om gamers guild</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;