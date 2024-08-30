import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { ContainerProductCardComponent } from '../containerCard/containerProductCardCopmonent';

const ProductsComponentWeb = reactToWebComponent(ContainerProductCardComponent, React, ReactDOM);
customElements.define('products-component', ProductsComponentWeb);
