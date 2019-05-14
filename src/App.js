import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  //função construtora
  constructor(props){
    //props é o objeto que carrega as informações do componente que instancia o app
    super(props);
    //estado do componente utilizado para manter, manipular informação
    //this.state = { lista: [5,3,6,44,1,2]};
    this.state = { lista: [{nome: "Ana", idade: 10},{nome: "Ana2", idade:20}]}
    this.adiciona = this.adiciona.bind(this);
  }

  adiciona(){
    this.setState({lista:[...this.state.lista, {nome: "Ana3", idade: 30}]});
    console.log(this);
  }

  render(){
    let fundoVermelho = {background: "red"};
    let x = this.state.lista.map((valor,indice) => {
      if(valor.idade < 18){
        return <li style={fundoVermelho} key={indice}> {valor.nome} - {valor.idade}</li>;  
      }else{
        return <li key={indice}> {valor.nome} - {valor.idade}</li>;
      }
      
    })

    return (
      <div className="App">
        <ul>
          {x}
        </ul>
        <input type="button" value="Adiciona Pessoa" onClick={this.adiciona}></input>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
