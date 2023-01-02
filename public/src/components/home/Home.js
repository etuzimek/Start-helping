import React from "react";
import Header from "../header/Header";
import Columns from "../threeColumns/ThreeColumns";
import FourSteps from "../fourSteps/FourSteps";
import AboutUs from "../aboutUs/AboutUs";
import WhoWeHelp from "../whoWeHelp/WhoWeHelp";
import ContactForm from "../contact/Contact";

function Home() {
  return (
    <div className="container">
      <Header />
      <Columns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactForm />
    </div>
  );
}
export default Home;
