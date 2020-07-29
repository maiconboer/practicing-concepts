import React from "react";

import useForm from "./hooks/useForm";
import Input from './components/Input';

const App = () => {

  // atribuindo false, torna o campo não obrigadorio
  const nome = useForm('');
  const cep = useForm('cep');
  const email = useForm('email');
  const profissao = useForm(false);
  
  function handleSubmit(event) {
    event.preventDefault();

    if(cep.validate() && email.validate() && nome.validate()) {
      console.log('Dados válidos, enviar formulário');
    } else {
      console.log('Dados inválidos, não enviar!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <Input 
        label='Nome' 
        id='nome' 
        type='text' 
        {...nome}
      />

      <Input 
        label='CEP' 
        id='cep' 
        type='text' 
        placeholder='00000-000'
        {...cep}
      />

      <Input 
        label='Email' 
        id='email' 
        type='email' 
        {...email}
      />

      <Input 
        label='Profissão' 
        id='profissao' 
        type='text' 
        {...profissao}
      />

    <button>Enviar</button>
    </form>
  );
};

export default App;
