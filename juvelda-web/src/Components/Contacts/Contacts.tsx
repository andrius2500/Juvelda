import React from "react";
import "./styles/styles.css";

//change class names

function Contacts() {
    return (
        <div className="contact-container">

            <div className="contact-container__box">
                <div className="header">
                    <h1 className="header__text">Kontaktai</h1>
                </div>
                <h2 className="company-name">
                    Juvelda servisas Vilniuje
                </h2>
                <div className="adress">
                    <p className="adress__location">
                        Antakalnio g. 23, Vilnius
                        </p>
                    <p className="adress__email">
                        juvelda@gmail.com
                        </p>
                    <p className="adress__phone">
                        +370 698 39444
                        </p>
                </div>
                <div className="work-time">
                    <p className="work-time__name">
                        Darbo laikas
                        </p>
                    <p className="work-time__workday--words">
                        Pirmadienį - Penktadienį
                        </p>
                    <p className="work-time__workday--hours">
                        09:00 - 19:00
                        </p>
                    <p className="work-time__saturday--words">
                        Šeštadienį
                        </p>
                    <p className="work-time__saturday--hours">
                        09:00 - 16:00
                        </p>
                    <p className="work-time__sunday">
                        Sekmadienį
                        </p>
                    <p>
                        nedirbame
                        </p>
                </div>
            </div>

            <div className="map-container">
                <iframe className="map-container__location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.5366450857937!2d25.30863579773432!3d54.70018108100984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96a202987c37%3A0x4c6ed7bf5f78d936!2sAntakalnio%20g.%2023%2C%20Vilnius%2010312!5e0!3m2!1slt!2slt!4v1607179481649!5m2!1slt!2slt"></iframe>
            </div>

        </div>
    );
}

export default Contacts;