import React, { useState } from 'react';

const ClienteCreate = ({ createCliente }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !telefone) return;
    createCliente({ nome, email, telefone });
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Cliente</h2>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="telefone">Telefone:</label>
      <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
};

export default ClienteCreate;
