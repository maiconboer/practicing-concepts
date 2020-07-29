import React from "react";

import Input from './components/Input';
import Select from './components/Select';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>

      <Input 
        label='Nome' 
        id='nome' 
        type='text' 
        value={nome} 
        setValue={setNome} 
      />

      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
        title='Produto'
      />

      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
        title='Cores'
      />

      <Checkbox
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
        title='Frutas'
      />

      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
        title='Termos e Condições'
      />

    </form>
  );
};

export default App;
