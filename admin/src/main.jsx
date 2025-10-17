import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MantineProvider>
)
