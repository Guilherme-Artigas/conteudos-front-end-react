import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <ul className="content">
        {conteudos.map(({conteudo, bloco, status}) => (
          <li key={ conteudo } className="card">
            <p>{`${conteudo} ${status} no bloco ${bloco}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Content;
