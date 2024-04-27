import React, { useState } from 'react';

const PedidoDelete = ({ pedidos, deletePedido }) => {
  const [id, setId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    if (!id) return;
    const pedidoId = parseInt(id);
    deletePedido(pedidoId);
    setId('');
  };

  return (
    <div>
      <h2>Excluir Pedido</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Excluir Pedido</button>
      </form>
    </div>
  );
};

export default PedidoDelete;
