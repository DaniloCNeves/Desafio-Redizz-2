import React, { useState } from 'react';

const PedidoCreate = ({ createPedido }) => {
  const [produtoQuantidade, setProdutoQuantidade] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!produtoQuantidade || !total) return;
    createPedido({ produtoQuantidade: parseInt(produtoQuantidade), total: parseFloat(total) });
    setProdutoQuantidade('');
    setTotal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Pedido</h2>
      <label htmlFor="produtoQuantidade">Quantidade do Produto:</label>
      <input type="number" id="produtoQuantidade" value={produtoQuantidade} onChange={(e) => setProdutoQuantidade(e.target.value)} />
      <label htmlFor="total">Total:</label>
      <input type="number" id="total" value={total} onChange={(e) => setTotal(e.target.value)} />
      <button type="submit">Adicionar Pedido</button>
    </form>
  );
};

export default PedidoCreate;
