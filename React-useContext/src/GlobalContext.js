import React, { useState, createContext} from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {

  const [count, setCount] = useState(0);

  function incrementOne() {
    setCount((count) => count + 1)
  }

  function decrementOne() {
    setCount((count) => count - 1)
  }

  return (
    <GlobalContext.Provider 
      value={{ count, incrementOne, decrementOne }}>
      {children}
    </GlobalContext.Provider>
  )
}

/* Criando e exportando contexto - GlobalContext
 * Criando componente - GlobalStorage 
 * Criando um estado que será global na aplicação - contar
 * Criando funções para incrementar e decrementar - globais
 * Retornando contexto, estado e funções para alterá-lo 
 * */