import React from 'react'
import Nav from '../nav/Nav';
import decorationImg from './Decoration.svg';
import homeHeroImageImg from './Home-Hero-Image-New.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={homeHeroImageImg} alt="box" />
        <div>
          <Nav />
          {/* <div className="header__right">
            <p className="header__note">
              Zacznij pomagać! <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <img src={decorationImg} alt="decoration" />
            <div className="button">
              <a href="/login" className="button__header">
                ODDAJ RZECZY
              </a>
              <a href="/login" className="button__header">
                ZORGANIZUJ ZBIÓRKĘ
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
