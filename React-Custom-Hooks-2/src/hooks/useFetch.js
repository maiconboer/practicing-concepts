import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {

    let response;
    let json;

    try {      
      setError(null)
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json(); 

    } catch (error) {
      json = null;
      setError('Erro xyz')

    } finally {
      setData(json);
      setLoading(false);

      return { response, json }
    }
  }, [])

  return { data, error, loading, request }
}

export default useFetch;


/* Criando custom Hook - useFetch()
 * Definindo e exportando 3 estados e 1 função de requisição, que atualiza o 'data'
 * Como estamos criando uma função dentro deste componente, quando o useEffect que é
 * chamado dentro de App faz o fetch deste componente, estados são alterados e o mesmo 
 * é re-renderizado várias vezes, momento ideal para utilizar o useCallback(), neste 
 * componente
 * */