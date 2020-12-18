import React from "react";
import "./styles/styles.css";

//change class names and <a> tags instead of <p> in links class

function Footer() {
    return (
        <div className="footer">
            <div className="component-container__footer">
                <div className="contact-header">
                    <h2 className="contact-header__name">UAB "Juvelda"</h2>
                    <p className="contact-header__description">Profesionalus padangų servisas</p>
                </div>
                <div className="links">
                    <p className="links__policy">Privatumo politika</p>
                    <p className="links__tyres">Naudotų padangų surinkimas</p>
                    <p className="links__page">www.juvelda.lt</p>
                </div>
                <div className="date">
                    <p className="date__year">Vilnius, 2021</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;