import React from 'react';
import AboutUs from "./AboutUs";
import Founders from "./Founders";
import OurProjects from "./Projects";
import Services from "./Services";
import OurWork from "./OurWork";
import FAQs from "./FAQs";
import Reviews from "./Reviews";
import First from "./First/First";

function Main() {
  return (
      <>
        <First/>
        <AboutUs/>
        <Founders/>
        <OurProjects/>
        <Services/>
        <OurWork/>
        <FAQs/>
        <Reviews/>
      </>
  )
}


export default Main;
