import React from "react";
import Contact from "./Contact";
import WhoWeHelp from "./WhoWeHelp";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="header__photo" />
        <div className="header__nav">
          <div className="header__right">
            <p className="header__note">
              Zacznij pomagać! <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <div className="header__decoration" />
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
      <div className="columns">
        <div>
          <a className="columns__numbers">10</a>
          <p>ODDANYCH WORKÓW</p>
          <p className="columns__lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div>
          <a className="columns__numbers">5</a>
          <p>ODDANYCH WORKÓW</p>
          <p className="columns__lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div>
          <a className="columns__numbers">7</a>
          <p>ODDANYCH WORKÓW</p>
          <p className="columns__lorem">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
      <div>
        <a name="foursteps" className="foursteps">
          Wystarczą 4 proste kroki
        </a>
        <center>
          <div className="header__decoration" />
        </center>
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
      <div className="aboutus">
        <div className="aboutus__left">
          <a name="aboutus" className="aboutus__about">
            O nas
          </a>
          <center>
            <div className="header__decoration" />
          </center>
          <p className="aboutus__article">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <div className="aboutus__signature"></div>
        </div>
        <div className="aboutus__image"></div>
      </div>
      <WhoWeHelp />
      <Contact />
    </div>
  );
}
export default Home;
