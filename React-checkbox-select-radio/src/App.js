import React from "react";

const App = () => {

  const [radio, setRadio] = React.useState('')
  const [select, setSelect] = React.useState('');
  const [checkBox, setCheckBox] = React.useState(false);
  const [colors, setColors] = React.useState([]);
  
  // function do form
  function handleSubmit(event) {
    event.preventDefault();
  }

  // function do checkbox
  function handleChangeColors({ target }) {
    if(target.checked) {
      setColors([...colors, target.value]);

    } else {
      setColors(colors.filter(color => color !== target.value))
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <p>Testando radio</p>
      <label>
        <input 
          type="radio" 
          name="produto"
          value="notebook"
          checked={radio === "notebook"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Notebook
      </label>

      <label>
        <input 
          type="radio" 
          name="produto"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Smartphone
      </label>

      {radio !== '' ? <p>Item selecionado: {radio}</p> : ''} 
      <p>==============================</p>
      
      <p>Testando select</p>
      <select 
        id="produtos" 
        value={select} 
        onChange={({target}) => setSelect(target.value)}
      >
        <option value="" disabled>Selecione</option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>

      {select !== '' ? <p>Item selecionado: {select}</p> : ''}  
      <p>==============================</p>


      <p>Testando check-box para 1 item</p>
      <label>
        <input 
          type="checkbox" 
          value="termos"
          checked={checkBox}
          onChange={({ target }) => setCheckBox(target.checked)}
        />
        Aceito os termos.
      </label>

      {checkBox && <p>Aceitou os termos.</p>}
      <p>==============================</p>


      <p>Testando check-box com vários itens</p>
      <label>
        <input 
          type="checkbox" 
          value="azul"
          checked={colors.includes('azul')}
          onChange={handleChangeColors}
        />
        Azul
      </label>

      <label>
        <input 
          type="checkbox" 
          value="vermelho"
          checked={colors.includes('vermelho')}
          onChange={handleChangeColors}
        />
        Vermelho
      </label>

      {colors.length > 0 
        ? <ul> Cor selecionada: 
            {colors.map(color => 
            <li key={color}>{color}</li>)} 
          </ul>
        : ''}
      <p>==============================</p>
      
    </form>
  );
};

export default App;
