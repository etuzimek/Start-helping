import React from 'react'
import decorationImg from '../assets/Decoration.svg';

function Header() {
  return (
    <div name className="header">
        <div className="header__photo" />
        <div className="header__nav">
          <div className="header__right">
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
          </div>
        </div>
      </div>
  )
}

export default Header
