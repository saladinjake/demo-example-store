import { useMode } from './style/ModeProvider';
import styled from "styled-components"

const Button = styled.button`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.text};
  padding: 1rem 2rem;
  border-radius: .5rem;
  outline: none;
  border: none;
  cursor: pointer;
  height:40px;
  width:300px;
`

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.color.primary};
  padding:10px;
  margin:10px;
`

const Title = styled.h1`
 
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.color.text};
`

const Input = styled.input`
 padding: 10px;
`

const Flex = styled.div<{ direction?: string; align?: string; width?: string; height?: string; justifyContent?: string }>`
  display: flex;
  width: ${({ width }) => width ? width : "100vw"};
  height: ${({ height }) => height ? height : "100%"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: ${({ align }) => align ? align : "left"};
  flex-direction: ${({ direction }) => direction ? direction : "row"};
`


function App() {
  const [mode, setMode] = useMode();
  const handleToggle = () => {
    setMode((mode) => mode === 'light' ? 'dark' : 'light');
  }

  return (

    <Container>




      <Flex width="100%" height="500px" direction="row" justifyContent='space-between'>
        <Title>Github users</Title>

        <Button onClick={handleToggle}>Switch To {mode.toUpperCase()} Theme</Button>
      </Flex>


      
    </Container>
  )
}

export default App
