
import { useMode } from './theme/style/ModeProvider';
import {RouteOutlets } from "./routes"
function App() {
  const [mode, setMode] = useMode();
  return(
    <RouteOutlets/>
  )
}

export default App
