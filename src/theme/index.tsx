import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from './style/theme';
import { useMode } from './style/ModeProvider';

type ThemeProps = {
  children: React.ReactNode;
}

function Theme({ children }: ThemeProps) {
  const [mode] = useMode();
  return (
    <ThemeProvider theme={theme[mode]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;