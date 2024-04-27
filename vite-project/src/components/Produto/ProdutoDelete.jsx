import React, { useState } from 'react';

const ProdutoDelete = ({ produtos, deleteProduto }) => {
  const [id, setId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    if (!id) return;
    const produtoId = parseInt(id);
    deleteProduto(produtoId);
    setId('');
  };

  return (
    <div>
      <h2>Excluir Produto</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Excluir Produto</button>
      </form>
    </div>
  );
};

export default ProdutoDelete;
