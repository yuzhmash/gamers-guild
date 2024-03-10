import { useState } from "react"

import Modal from "../modal/Modal"

import img from "./line.svg"

import "./header.sass"

const Header = () => {

    const [click, setClick] = useState(false)

    const handleClicke = () => {
        setClick(!click)
    }

    return (
        <header>
            {click ? <Modal/> : null}
            <div className="container">
                <div className="header__main">
                    <div className="header__main__title">
                        GAMERS <br></br> <span>GUILD</span> <br></br> FÖR DIG
                    </div>
                    <img className="header__img" src={img} alt="Line"></img>
                    <div className="block"></div>
                    <button className="header__main__btn" onClick={handleClicke}>
                        kontact
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;