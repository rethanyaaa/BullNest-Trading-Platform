import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
};

export default HomePage;
