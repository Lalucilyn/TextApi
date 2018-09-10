import React, { Component } from 'react';
import Form from './form'
import Response from './response'

class Main extends Component {
  constructor (props) {
    super(props);
      this.state = {
        text:"",
        response:""
      }
  }

  //Gets data from input - Obtiene la data del input  
  handleUserInput = (event) => {
    const value = event.target.value;
    this.setState({text:value})
  }  

  //Send data to the api - envía la data a la API
  sendData = (event) => {
  var that = this;
  event.preventDefault()  
  var text = this.state.text;
  
  fetch("/data",{      
      method: 'post',
      body: JSON.stringify({"name":"data", "text":text}),
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => {
        return response.json()
    })
    .then((recurso) => {
      this.setState({response:recurso.response})
    })
    .catch(function(error){
      console.log(error)
      that.setState({response:"No se pudo establecer la conexión con el servidor"})
    })
    this.setState({text:""}) //Cleans the input
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="main-box col-xs-12  col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
            <div className="row">
                <div className="title col-xs-12">
                  <h1>ToolBox Exercise</h1>
                </div>
            </div>   
            <div className="row">
              <Form change={this.handleUserInput} value={this.state.text} send={this.sendData}/>
            </div>
            <div className="row">
              <div className="response col-xs-10 col-xs-offset-1">                
                <Response message={this.state.response?this.state.response : "Aquí aparecerá su respuesta"}/>
              </div>
            </div>
          </div>  
        </div>
      </div>
    )}
  }

export default Main;
