import React from 'react';
import './App.css';
import { ContainerProductCardComponent } from './components/containerCard/containerProductCardCopmonent';
import { CardsComponent } from './components/productsSlider/cardsComponent';

function App() {
  return (
    <div className="App">
      <CardsComponent/>
      <ContainerProductCardComponent/>
    </div>
    
  );
}

export default App;
