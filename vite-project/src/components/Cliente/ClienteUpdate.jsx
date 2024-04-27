import React, { useState } from 'react';

const ClienteUpdate = ({ clientes, updateCliente }) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nome || !email || !telefone) return;
    const clienteAtualizado = {
      id,
      nome,
      email,
      telefone,
    };
    updateCliente(clienteAtualizado);
    setId('');
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Atualizar Cliente</h2>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="telefone">Telefone:</label>
      <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button type="submit">Atualizar Cliente</button>
    </form>
  );
};

export default ClienteUpdate;
