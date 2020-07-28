import React, { useContext } from 'react';

import { GlobalContext } from './GlobalContext';

const Produto = () => {

  const global = useContext(GlobalContext)

  return (
    <div>
      Produto: {global.count} 
      <button onClick={global.incrementOne}>Adicionar</button>
      <button onClick={global.decrementOne}>Remover</button>
    </div> 
  )
}

export default Produto;

/* Importando o contexto - GlobalContext
 * Criando constante e atribuindo o contexto GlobalContext a ela
 * Agora a constate possui acesso ao estado e funções do contexto
 * */