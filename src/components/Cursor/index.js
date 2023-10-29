import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth < 1024) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if (!isDesktop) {
    return null; // Повертаємо null, якщо не є десктопом
  }

  return (
    <AnimatedCursor
      className="animated-cursor"
      innerSize={8}
      outerSize={25}
      color="0, 0, 0"
      outerAlpha={1}
      innerScale={1}
      outerScale={1.5}
      outerStyle={{
        backgroundColor: 'white',
        mixBlendMode: 'exclusion',
        zIndex: '9999999',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.grid-item',
      ]}
    />
  );
}

export default Cursor;
