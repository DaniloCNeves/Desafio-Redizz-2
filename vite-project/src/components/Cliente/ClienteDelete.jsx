import React, { useState } from 'react';

const ClienteDelete = ({ clientes, deleteCliente }) => {
  const [id, setId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    if (!id) return;
    const clienteId = parseInt(id);
    deleteCliente(clienteId);
    setId('');
  };

  return (
    <div>
      <h2>Excluir Cliente</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Excluir Cliente</button>
      </form>
    </div>
  );
};

export default ClienteDelete;
