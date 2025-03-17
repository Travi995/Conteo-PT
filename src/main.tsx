import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';  // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';  // Iconos
import { options } from './config/global.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <PrimeReactProvider value={options}>
        <App />
      </PrimeReactProvider>
    </HashRouter>
  </StrictMode>,
)
