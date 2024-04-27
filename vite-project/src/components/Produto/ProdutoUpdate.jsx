import React, { useState } from 'react';

const ProdutoUpdate = ({ produtos, updateProduto }) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nome || !quantidade || !valor) return;
    const produtoAtualizado = {
      id,
      nome,
      quantidade: parseInt(quantidade),
      valor: parseFloat(valor),
    };
    updateProduto(produtoAtualizado);
    setId('');
    setNome('');
    setQuantidade('');
    setValor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Atualizar Produto</h2>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      <label htmlFor="valor">Valor:</label>
      <input type="number" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type="submit">Atualizar Produto</button>
    </form>
  );
};

export default ProdutoUpdate;
