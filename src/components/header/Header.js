import "./Header.css";
import React from "react";

const Header = (props) => {
    return <>
            <div className="containerTitle">
                <h1 className="titleSeccion">{props.titulo}</h1>
            </div>
        </>;
};

export default Header;
