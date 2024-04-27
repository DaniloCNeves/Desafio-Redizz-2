import React, { useState } from 'react';

const ProdutoCreate = ({ createProduto }) => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !quantidade || !valor) return;
    createProduto({ nome, quantidade: parseInt(quantidade), valor: parseFloat(valor) });
    setNome('');
    setQuantidade('');
    setValor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Produto</h2>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      <label htmlFor="valor">Valor:</label>
      <input type="number" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProdutoCreate;
