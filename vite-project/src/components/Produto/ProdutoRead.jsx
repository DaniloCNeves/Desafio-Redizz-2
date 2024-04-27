import React from 'react';

const ProdutoRead = ({ produtos }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - Quantidade: {produto.quantidade} - Valor: {produto.valor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutoRead;
