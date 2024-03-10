import { useState, useEffect } from "react";

import Form from "../form/Form";

import "./modal.sass"

const Modal = () => {

    const [style, setStyle] = useState(true)
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, [])
    const closeModa = () => {
        document.body.style.overflow = null;
        setStyle(false)
    }

    return (
        <div className="modal__wrapper" style={{display: style ? "block" : "none"}}>
            <div className="modal">
                <Form/>
                <div className="close" onClick={closeModa}></div>
            </div>
        </div>
    )
}

export default Modal;