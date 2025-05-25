import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModeProvider } from './theme/style/ModeProvider.tsx'
import Theme from './theme';
import App from './App.tsx'
import { GlobalStyles  } from './theme/globalStyles';
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeProvider>
      <Theme>
         <BrowserRouter>
         <AuthProvider>
         
             <App />
         
        </AuthProvider>
        </BrowserRouter>
        <GlobalStyles />
      </Theme>
    </ModeProvider>
    
  </React.StrictMode>,
)
