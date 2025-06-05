import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ModeProvider } from './theme/style/ModeProvider.tsx'
import Theme from './theme';
import App from './App.tsx'
import { GlobalStyles } from './theme/globalStyles';
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Loader from './components/UIElements/Loader/Loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeProvider>
      <Theme>
        <BrowserRouter>
          <Suspense fallback={<Loader variant={"sm"} />}>
            <AuthProvider>

              <App />

            </AuthProvider>
          </Suspense>
        </BrowserRouter>
        <GlobalStyles />
      </Theme>
    </ModeProvider>

  </React.StrictMode>,
)
