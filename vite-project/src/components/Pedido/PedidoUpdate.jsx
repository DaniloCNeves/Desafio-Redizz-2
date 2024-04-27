import React, { useState } from 'react';

const PedidoUpdate = ({ pedidos, updatePedido }) => {
  const [id, setId] = useState('');
  const [produtoQuantidade, setProdutoQuantidade] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !produtoQuantidade || !total) return;
    const pedidoAtualizado = {
      id,
      produtoQuantidade: parseInt(produtoQuantidade),
      total: parseFloat(total),
    };
    updatePedido(pedidoAtualizado);
    setId('');
    setProdutoQuantidade('');
    setTotal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Atualizar Pedido</h2>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="produtoQuantidade">Quantidade do Produto:</label>
      <input type="number" id="produtoQuantidade" value={produtoQuantidade} onChange={(e) => setProdutoQuantidade(e.target.value)} />
      <label htmlFor="total">Total:</label>
      <input type="number" id="total" value={total} onChange={(e) => setTotal(e.target.value)} />
      <button type="submit">Atualizar Pedido</button>
    </form>
  );
};

export default PedidoUpdate;
