import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RootContext from './components/context/RootContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RootContext>
    <App />
    </RootContext>
    </BrowserRouter>
  </StrictMode>,
)
