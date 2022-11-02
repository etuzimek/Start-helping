import React from 'react'
import Nav from '../nav/Nav';
import decorationImg from './Decoration.svg';
import homeHeroImageImg from './Home-Hero-Image-New.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={homeHeroImageImg} alt="box" />
        <div className="header__nav">
          <Nav />
          <div className="header__right">
            <p>Zacznij pomagać! </p>
            <p> Oddaj niechciane rzeczy w zaufane ręce</p>
            <img src={decorationImg} alt="decoration" />
            <div>
              <button className="button">
                ODDAJ RZECZY
              </button>
              <button className="button">
                ZORGANIZUJ ZBIÓRKĘ
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
