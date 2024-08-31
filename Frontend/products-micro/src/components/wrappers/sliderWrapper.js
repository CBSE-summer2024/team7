import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { CardsComponent } from '../productsSlider/cardsComponent';

const ProductsComponentWeb = reactToWebComponent(CardsComponent, React, ReactDOM);
customElements.define('slider-component', ProductsComponentWeb);
