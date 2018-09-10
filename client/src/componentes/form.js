import React from 'react';             

const Form = (props) => {
  
  return (<form onSubmit={props.send}>
    <div className="row">
      <label htmlFor="data">Ingrese el texto que desee enviar a la API</label>
    </div>
    <div className="row">  
      <input name="data" type="text" onChange={props.change} value={props.value} required/>
    </div>
    <div className="row">
      <button type="submit" className="btn">Enviar</button>
    </div>
  </form>)
}

export default Form;