import React, { useEffect } from 'react';
import './cardsComponent.css';
import { shoeLogos } from "../../data/productSliderData";

export const CardsComponent = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className='slider'>
      <div className="scroller" data-direction="right" data-speed="fast">
      <div className="scroller__inner">
      {shoeLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};
