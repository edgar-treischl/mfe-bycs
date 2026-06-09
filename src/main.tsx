import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

// Add class to root for proper CSS scoping within the MFE
rootElement.classList.add('bycs-mfe__root')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
