import img from "./line.svg"

import "./header.sass"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__main">
                    <div className="header__main__title">
                        GAMERS <br></br> <span>GUILD</span> <br></br> FÖR DIG
                    </div>
                    <img className="header__img" src={img} alt="Line"></img>
                    <div className="block"></div>
                    <button className="header__main__btn">
                        kontact
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;