import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = { nome: "", pessoas: ["Maria", "Pedro", "Joana"] };
  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={evento => {
              this.setState({ nome: evento.target.value });
            }}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.pessoas.map(nome => (
            <li>{nome}</li>
          ))}
        </ul>
      </>
    );
  }

  cadastrarUsuario(evento) {
    evento.preventDefault();
    console.log(evento.target.value);
  }
}
