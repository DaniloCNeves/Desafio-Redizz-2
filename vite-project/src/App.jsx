import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import MainMenu from './components/Menu/Menu';
import ClienteCreate from './components/Cliente/ClienteCreate';
import ClienteRead from './components/Cliente/ClienteRead';
import ClienteUpdate from './components/Cliente/ClienteUpdate';
import ClienteDelete from './components/Cliente/ClienteDelete';
import Cliente from './models/Cliente';
import ProdutoCreate from './components/Produto/ProdutoCreate';
import ProdutoRead from './components/Produto/ProdutoRead';
import ProdutoUpdate from './components/Produto/ProdutoUpdate';
import ProdutoDelete from './components/Produto/ProdutoDelete';
import Produto from './models/Produto';
import PedidoCreate from './components/Pedido/PedidoCreate';
import PedidoRead from './components/Pedido/PedidoRead';
import PedidoUpdate from './components/Pedido/PedidoUpdate';
import PedidoDelete from './components/Pedido/PedidoDelete';
import Pedido from './models/Pedido';

function App() {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <div>
      <MainMenu setActiveMenu={setActiveMenu} />
      {activeMenu === 'cliente' && <ClientesManager />}
      {activeMenu === 'produto' && <ProdutosManager />}
      {activeMenu === 'pedido' &&  <PedidosManager  />}
    </div>
  );
}

export default App;

const ClientesManager = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(storedClientes.map(clienteData => new Cliente(clienteData.id, clienteData.nome, clienteData.email, clienteData.telefone)));
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes]);

  const createCliente = (clienteData) => {
    const newCliente = new Cliente(Date.now(), clienteData.nome, clienteData.email, clienteData.telefone);
    setClientes([...clientes, newCliente]);
  };

  const readClientes = () => {
    return clientes;
  };

  const updateCliente = (clienteAtualizado) => {
    const updatedClientes = clientes.map((cliente) =>
      cliente.id === clienteAtualizado.id ? clienteAtualizado : cliente
    );
    setClientes(updatedClientes);
  };

  const deleteCliente = (clienteId) => {
    const updatedClientes = clientes.filter((cliente) => cliente.id !== clienteId);
    setClientes(updatedClientes);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <ClienteCreate createCliente={createCliente} />
        <ClienteRead clientes={readClientes()} />
        <ClienteUpdate clientes={clientes} updateCliente={updateCliente} />
        <ClienteDelete clientes={clientes} deleteCliente={deleteCliente} />
      </div>
    </>
  );
};

const ProdutosManager = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const storedProdutos = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(storedProdutos.map(produtoData => new Produto(produtoData.id, produtoData.nome, produtoData.quantidade, produtoData.valor)));
  }, []);

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  const createProduto = (produtoData) => {
    const newProduto = new Produto(Date.now(), produtoData.nome, produtoData.quantidade, produtoData.valor);
    setProdutos([...produtos, newProduto]);
  };

  const readProdutos = () => {
    return produtos;
  };

  const updateProduto = (produtoAtualizado) => {
    const updatedProdutos = produtos.map((produto) =>
      produto.id === produtoAtualizado.id ? produtoAtualizado : produto
    );
    setProdutos(updatedProdutos);
  };

  const deleteProduto = (produtoId) => {
    const updatedProdutos = produtos.filter((produto) => produto.id !== produtoId);
    setProdutos(updatedProdutos);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <ProdutoCreate createProduto={createProduto} />
        <ProdutoRead produtos={readProdutos()} />
        <ProdutoUpdate produtos={produtos} updateProduto={updateProduto} />
        <ProdutoDelete produtos={produtos} deleteProduto={deleteProduto} />
      </div>
    </>
  );
};

const PedidosManager = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const storedPedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    setPedidos(storedPedidos.map(pedidoData => new Pedido(pedidoData.id, pedidoData.produtoQuantidade, pedidoData.total)));
  }, []);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  const createPedido = (pedidoData) => {
    const newPedido = new Pedido(Date.now(), pedidoData.produtoQuantidade, pedidoData.total);
    setPedidos([...pedidos, newPedido]);
  };

  const readPedidos = () => {
    return pedidos;
  };

  const updatePedido = (pedidoAtualizado) => {
    const updatedPedidos = pedidos.map((pedido) =>
      pedido.id === pedidoAtualizado.id ? pedidoAtualizado : pedido
    );
    setPedidos(updatedPedidos);
  };

  const deletePedido = (pedidoId) => {
    const updatedPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId);
    setPedidos(updatedPedidos);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <PedidoCreate createPedido={createPedido} />
        <PedidoRead pedidos={readPedidos()} />
        <PedidoUpdate pedidos={pedidos} updatePedido={updatePedido} />
        <PedidoDelete pedidos={pedidos} deletePedido={deletePedido} />
      </div>
    </>
  );
};