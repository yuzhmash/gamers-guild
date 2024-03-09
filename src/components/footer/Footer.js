import { useLocation } from "react-router-dom"

import "./footer.sass"

const Footer = ({style}) => {
    const location = /\/(br%C3%A4dspel|godis|lek|pussel|gamesworkshop|kontakt|$)/.test(useLocation().pathname)

    return (
        <>
            {location ? <View style={style} /> : null}
        </>
    )
}

const View = ({style}) => {
    return (
        <footer className="footer" style={style} >
            <div className="container wrapper">
                <div className="footer__wrapper">
                    <div className="footer__title">
                        kontacta oss
                    </div>
                    <form className="form"> 
                        <input placeholder="namn" type="name"/>
                        <input placeholder="E-mail" type="email"/>
                        <textarea placeholder="meddelande" name="meddelande"></textarea>
                        <button className="header__main__btn header__main__btn_form">skicka</button>
                    </form>
                </div>
                <div className="footer__menu">
                    <div className="footer__name">Gamers Guild </div>
                    <address className="footer__address">Nätragatan 2 <br></br> <br></br> 893 30 Bjästa</address>
                    <a href="main.html" className="footer__email">Mail: kontakt(at)gamers-guild.se</a>
                    <div className="footer__verif">© Copyright Gamers Guild 2023 All rights reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;