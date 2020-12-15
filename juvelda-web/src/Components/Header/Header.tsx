import React from "react";
import "./styles/styles.css";

function Header() {
    return (
        <div className="header-container">
            <div className="header-container__box">
                <div className="company-header">
                    <h1 className="company-header__name">UAB "Juvelda"</h1>
                </div>
                <div className="company-description">
                    <h3 className="company-description__paragraph">profesionalus padangų servisas</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;