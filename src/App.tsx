import { useState } from 'react';
import { useMode } from './style/ModeProvider';
import styled from "styled-components"
import {RouteOutlets } from "./routes"
function App() {
  const [mode, setMode] = useMode();
  return(
    <RouteOutlets/>
  )
}

export default App
