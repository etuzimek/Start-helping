import React from "react";
import Header from "./header/Header";
import Columns from "./threeColumns/ThreeColumns";
import Foursteps from "./Foursteps";
import About from "./About";
import WhoWeHelp from "./WhoWeHelp";
import ContactForm from "./Contact";

function Home() {
  return (
    <div className="container">
      <Header />
      <Columns />
      <Foursteps />
      <About />
      <WhoWeHelp />
      <ContactForm />
    </div>
  );
}
export default Home;
