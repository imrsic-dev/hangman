import React from 'react';
import { GameProvider } from './context/game.context';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './style/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GameProvider>
          <App />
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
