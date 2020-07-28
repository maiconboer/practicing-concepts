import React from "react";
import axios from 'axios';

const App = () => {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');

  async function handleSubmit(event) {   
    event.preventDefault();

    try {
      const user = {
        nome,
        email,
        senha,
        rua,
        numero,
        bairro,
        cidade,
        estado
      }
      
      const url = 'https://ranekapi.origamid.dev/json/api/usuario';
      const response = await axios.post(url, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      if(response.status === 200) {
        showMessageResult(true)
      }

    } catch (error) {
        console.log(error)
        showMessageResult(false)
    }
  }

  function showMessageResult(result) {
    
    if(result) {
      alert('Usuário criado com sucesso!')
    } else {
      // correto seria verificar o tipo do erro e especificar o motivo do erro
      // aqui é um exercicio simples para prática de conceitos
      alert('Erro no cadastro!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" value={senha} onChange={(event) => setSenha(event.target.value)} />

      <label htmlFor="rua">Rua</label>
      <input type="text" name="rua" id="rua" value={rua} onChange={(event) => setRua(event.target.value)} />

      <label htmlFor="numero">Numero</label>
      <input type="text" name="numero" id="numero" value={numero} onChange={(event) => setNumero(event.target.value)} />

      <label htmlFor="bairro">Bairro</label>
      <input type="text" name="bairro" id="bairro" value={bairro} onChange={(event) => setBairro(event.target.value)} />

      <label htmlFor="email">Cidade</label>
      <input type="text" name="cidade" id="cidade" value={cidade} onChange={(event) => setCidade(event.target.value)} />

      <label htmlFor="estado">Estado</label>
      <input type="text" name="estado" id="estado" value={estado} onChange={(event) => setEstado(event.target.value)} />

      <button>Enviar</button>
    </form>
  );
};

export default App;
