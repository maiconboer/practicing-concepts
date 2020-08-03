import React from 'react';
import Slide from './Slide';

import loboImg from './assets/lobo.jpg';
import raposaImg from './assets/raposa.jpg';
import tigreImg from './assets/tigre.jpg';

const App = () => {
  const slides = [
    {
      id: "slide1",
      image: loboImg
    },
    {
      id: "slide2",
      image: raposaImg
    },
    {
      id: "slide3",
      image: tigreImg
    },
  ];
 
  return (
    <Slide slides={slides} />
  );
};

export default App;