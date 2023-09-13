import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FoundersCarousel = ({ children }) => {
  return (
      <Carousel
          showStatus={false}
          showThumbs={false}
          axis="vertical"
          emulateTouch
          infiniteLoop
          selectedItem={0}
      >
        {children}
      </Carousel>
  );
};

export default FoundersCarousel;
