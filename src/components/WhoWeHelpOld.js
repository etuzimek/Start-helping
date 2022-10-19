import React from "react";

function WhoWeHelp() {
  return (
    <div className="help">
      <p className="foursteps">Komu pomagamy?</p>
      <center>
        <div className="header__decoration" />
      </center>
      <div className="help__details">
        <div>
          <a href="#" className="help__who">
            Fundacjom
          </a>
          <a href="#" className="help__who">
            Organizacjom pozarządowym
          </a>
          <a href="#" className="help__who">
            Lokalnym zbiórkom
          </a>
        </div>
        <p className="help__info">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <div className="help__fundations">
          <div>
            <p style={{fontSize: 26, marginBottom: 0}}>Fundacja “Dbam o Zdrowie”</p>
            <p style={{marginTop: 0}}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.”</p>
          </div>
          <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <p></p>
        </div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default WhoWeHelp;
