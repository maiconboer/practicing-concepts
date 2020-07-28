import React from "react";
import Product from './Product'

import { GlobalStorage } from './GlobalContext';

const App = () => {

  return (   
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default App;

/* Importando componente que possui o contexto criado
 * Envolvendo a página/componente Produto no contexto
 * Agora produto possui acesso ao que tem dentro de GlobalStorage
 * */