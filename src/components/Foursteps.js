import React from 'react'
import decorationImg from '../assets/Decoration.svg';

function Foursteps() {
    return (
        <>
            <div>
                <div id="foursteps" className="foursteps">
                    Wystarczą 4 proste kroki
                </div>
                <img src={decorationImg} alt="decoration" />
            </div>
            <div className=" four four__columns">
                <div>
                    <center>
                        <div className="four__image four__image1" />
                    </center>
                    <p>Wybierz rzeczy</p>
                    <hr />
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <center>
                        <div className="four__image four__image2" />
                    </center>
                    <p>Spakuj je</p>
                    <hr />
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <center>
                        <div className="four__image four__image3" />
                    </center>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr />
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <center>
                        <div className="four__image four__image4" />
                    </center>
                    <p>Zamów kuriera</p>
                    <hr />
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="button">
                <a href="/login" className="button__header">
                    ODDAJ RZECZY
                </a>
            </div>
        </>
    )
}

export default Foursteps

