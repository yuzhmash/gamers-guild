import { Link } from "react-router-dom"

import img from "./red.png"

import "./error.sass"

const Error = () => {
    return (
        <div className="error" >
            <div className="container error__wrapper">
                <div className="error__img">
                    <img alt="page not found img" src={img} ></img>
                </div>
                <div className="error__text" >
                    <div className="error__text_title">OJ! SIDAN FINNS INTE.</div>
                    <div className="error__text_subtitle">Du måste valt fel dörr eftersom jag inte kan hitta sidan du letar efter.</div>
                    <Link end to="/" ><button className="error__text_btn">Gå till start</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Error;