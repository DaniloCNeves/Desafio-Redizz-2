import React from 'react';

const PedidoRead = ({ pedidos }) => {
  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Quantidade do Produto: {pedido.produtoQuantidade} - Total: {pedido.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidoRead;
