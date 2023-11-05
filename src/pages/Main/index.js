import React, { useEffect, lazy } from 'react';
const First = lazy(() => import('./First/First'));
const AboutUs = lazy(() => import('./AboutUs'));
const Founders = lazy(() => import('./Founders'));
const OurProjects = lazy(() => import('./Projects'));
const Services = lazy(() => import('./Services'));
const OurWork = lazy(() => import('./OurWork'));
const FAQs = lazy(() => import('./FAQs'));
const Reviews = lazy(() => import('./Reviews'));

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <First />
      <AboutUs />
      <Founders />
      <OurProjects />
      <Services />
      <OurWork />
      <FAQs />
      <Reviews />
    </>
  );
}

export default Main;
