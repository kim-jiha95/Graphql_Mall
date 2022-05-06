import React from 'react'
import { createRoot } from 'react-dom/client';
import './pages/scss/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


