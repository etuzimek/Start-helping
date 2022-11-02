import React from "react";
import Header from "./header/Header";
import Columns from "./threeColumns/ThreeColumns";
import FourSteps from "./FourSteps";
import About from "./About";
import WhoWeHelp from "./WhoWeHelp";
import ContactForm from "./Contact";

function Home() {
  return (
    <div className="container">
      <Header />
      <Columns />
      <FourSteps />
      <About />
      <WhoWeHelp />
      <ContactForm />
    </div>
  );
}
export default Home;
