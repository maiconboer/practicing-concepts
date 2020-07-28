import React from "react";

import useFetch from './hooks/useFetch';

const App = () => {
  
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const obj = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }
    
    fetchData();
  },[request])

  return (
    <>    
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {data && data.map(produto => (
        <div key={produto.id}>
          <h1>
            {produto.nome}
          </h1>
        </div>)
      )}
    </>
  );
};

export default App;

/* Importando componente custom Hook, useFetch()
 * Realizando a request e renderizando dados
 * Renderiza Carregando... antes do resultado da requisição
 * Rederiza Error caso ocorra
 * */