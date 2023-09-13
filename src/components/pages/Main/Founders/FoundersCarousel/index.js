import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FoundersCarousel = ({ children }) => {
  return (
      <Carousel
          showStatus={false}
          showThumbs={false}
          axis="vertical" // Встановіть вертикальний напрямок
          emulateTouch // Дозволіть емулювати торкання для прокрутки скролом
          infiniteLoop // Безкінечна карусель
          selectedItem={0} // Початковий вибраний елемент
      >
        {children}
      </Carousel>
  );
};

export default FoundersCarousel;
