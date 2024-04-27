import React from 'react';
import Button from '@mui/material/Button';
import "./Menu.css";

const MainMenu = ({ setActiveMenu }) => {
  return (
    <nav>
      <ul>
        <Button variant="contained">
          <li onClick={() => setActiveMenu('cliente')}>Cliente</li>
        </Button>
        <Button variant="contained">
          <li onClick={() => setActiveMenu('produto')}>Produto</li>
        </Button>
        <Button variant="contained">
          <li onClick={() => setActiveMenu('pedido')}>Pedido</li>
        </Button>
      </ul>
    </nav>
  );
};

export default MainMenu;
