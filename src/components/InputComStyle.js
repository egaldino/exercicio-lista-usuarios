import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          type={this.props.tipo}
          placeholder={this.props.titulo}
          value={this.props.valor}
          onChange={this.props.atualizarValor}
        />
      </div>
    );
  }
}
