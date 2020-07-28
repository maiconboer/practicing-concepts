import React, { useState, useEffect } from 'react';

/* Podemos criar nossos próprios hooks, assim evitamos repetição
 * de código. Todo custom hook deve começar com a palavra use. 
 * Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, 
 * seja um valor único, uma array ou um objeto.
 * */

const useLocalStorage = (key, inicial) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  })

  useEffect(() => {
    window.localStorage.setItem(key, state)
  },[key, state])

  return [state, setState];
}

export default useLocalStorage;

/* Criando custom hook - useLocalStorage(key, inicial)
 * Cria um estado reativo que sempre quando o é salvo, também salva no localStorage
 * Inicialmente ele procura se o valor está presente no locaStorage, se sim, o retorna
 * Retornando do hook -> um estado e um setSetate
 * */