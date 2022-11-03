import React from 'react'
import decorationImg from './Decoration.svg';
import icon1Img from './Icon-1.svg'
import icon2Img from './Icon-2.svg'
import icon3Img from './Icon-3.svg'
import icon4Img from './Icon-4.svg'

function FourSteps() {
    return (
        <section className="foursteps">
            <div id="foursteps" className="foursteps__title">
                Wystarczą 4 proste kroki
            </div>
            <img src={decorationImg} alt="decoration" />
            <div className="foursteps__columns">
                <div>
                    <img src={icon1Img} alt="icon" />
                    <p>Wybierz rzeczy</p>
                    <hr />
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={icon2Img} alt="icon" />
                    <p>Spakuj je</p>
                    <hr />
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={icon3Img} alt="icon" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr />
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={icon4Img} alt="icon" />
                    <p>Zamów kuriera</p>
                    <hr />
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button className="button">
                ODDAJ RZECZY
            </button>
        </section>
    )
}

export default FourSteps