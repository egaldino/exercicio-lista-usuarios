import React, { Component } from "react";
import InputComStyle from "./components/InputComStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Maria",
      email: "",
      telefone: "",
      pessoas: []
    };
  }

  delete = indexRemover => {
    this.setState({
      pessoas: this.state.pessoas.filter(
        (pessoa, index) => indexRemover !== index
      )
    });
  };

  renderTitulo() {
    return <h1>Cadastro de Usuários</h1>;
  }

  renderFormulario() {
    return (
      <form onSubmit={this.cadastrarUsuario}>
        <InputComStyle
          titulo="Nome"
          tipo="text"
          valor={this.state.nome}
          atualizarValor={e => this.setState({ nome: e.target.value })}
        />
        <InputComStyle
          titulo="Telefone"
          tipo="number"
          valor={this.state.telefone}
        />
        <InputComStyle titulo="E-mail" tipo="email" valor={this.state.email} />

        <input className="btn btn-primary" type="submit" />
      </form>
    );
  }

  renderTabela() {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>
          {this.state.pessoas.map((pessoa, index) => (
            <tr key={index}>
              <td>{pessoa.nome}</td>
              <td>{pessoa.telefone}</td>
              <td>{pessoa.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  value={this.state.pessoa}
                  onClick={() => this.delete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <>
        {this.renderTitulo()}
        {this.renderFormulario()}
        {this.renderTabela()}
      </>
    );
  }

  cadastrarUsuario = evento => {
    evento.preventDefault();
    this.setState({
      pessoas: [
        ...this.state.pessoas,
        {
          nome: this.state.nome,
          telefone: this.state.telefone,
          email: this.state.email
        }
      ],
      nome: "",
      email: "",
      telefone: ""
    });

    console.log(this.state);
  };
}
