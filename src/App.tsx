import { useState } from 'react';
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
  width:200px;
`



const Title = styled.h1`
 
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.color.text};
`

const Input = styled.input<{ width?: string }>`
 padding: 10px;
 width: ${({ width }) => width ? width : "333px"}
`

const Flex = styled.div<{
  direction?: string;
  align?: string;
  width?: string; height?: string; justifyContent?: string; gap?: string
}>`
  display: flex;
  width: ${({ width }) => width ? width : "100vw"};
  height: ${({ height }) => height ? height : "100%"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: ${({ align }) => align ? align : "left"};
  flex-direction: ${({ direction }) => direction ? direction : "row"};
  flex-gap: ${({ gap }) => gap ? gap : "10px"}
 
  `

const Text = styled.div<{ mode?: string }>`
 font-size: 14px;
 padding: 2px;
 margin: 2px;
 color:${({ mode }) => mode == "dark" ? "#fff" : "#888"}

`

const CardSample = styled.div`
  box-shadow: 12px -50px 50px rgba(255,255,255,0.8);

  padding: 12px;
  margin: 10px;
 
  border-radius: 10px;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding:5px;
 
`


const Repository = styled.div`
 width: 300px;
 float:left;
 height: 200px;
 border: 2px solid #eaeaea;
`

const Heading = styled.h3`
 font-size: 20px;
 padding : 10px;
 margin-left:20px
`
function App() {
  const [mode, setMode] = useMode();
  const [searchField, setSearchField] = useState<string>("");
  const [profile, setProfile] = useState<any | null>(null);
  
  return(
  )
}

export default App
