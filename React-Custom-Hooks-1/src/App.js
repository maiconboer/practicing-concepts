import React from "react";

import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  
  function handleClick({ target }) {
    setProduto(target.innerText)
  }
  
  return (
    <>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );
};

export default App;

/* Importando componente useLocalStorage()
 * useLocalStorage('produto', '') - armazena no localStorage 
 * handleClick - obtém o texto do botão e altera o valor de produto/localStorage
 * */