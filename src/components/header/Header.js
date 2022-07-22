import "./Header.css";
import React from "react";

const Header = (props) => {
    return <>
            <div className="containerTitle">
                <img src="/img/fondo-titulo.png" alt="fondo" className="imgBackgroundTitle"/>
                <h1 className="titleSeccion">{props.titulo}</h1>
            </div>
        </>;
};

export default Header;
