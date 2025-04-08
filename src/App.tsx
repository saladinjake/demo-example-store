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

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
  background: ${props => props.theme.color.primary};
  padding:10px;
  margin:10px;
`

const Title = styled.h1`
 
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.color.text};
`

const Input = styled.input<{width?: string}>`
 padding: 10px;
 width: ${({width})=> width ? width :"333px"}
`

const Flex = styled.div<{ direction?: string;
   align?: string;
   width?: string; height?: string; justifyContent?: string; gap?: string }>`
  display: flex;
  width: ${({ width }) => width ? width : "100vw"};
  height: ${({ height }) => height ? height : "100%"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  align-items: ${({ align }) => align ? align : "left"};
  flex-direction: ${({ direction }) => direction ? direction : "row"};
  flex-gap: ${({ gap}) => gap ? gap : "10px"}
`

const Text = styled.div`
 font-size: 14px;
 padding: 2px;
 margin: 2px;

`

const CardSample = styled.div`
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding:5px;
 
`

function App() {
  const [mode, setMode] = useMode();
  const [searchField, setSearchField] = useState<string>("");
  const [profile, setProfile] = useState<any>({});
  const [error, setError] = useState<string| null>(null)
  const [totalFollowers,setTotalFollowersCount] = useState<number>(0);
  const handleToggle = () => {
    setMode((mode) => mode === 'light' ? 'dark' : 'light');
  }


  const  handleGetApiRequest = async () => {
    try{

    
       const response = ( await fetch(`https://api.github.com/users/${searchField}`));
      const data = await response.json()

       //get followers
       const folowersResponse = await fetch(`https://api.github.com/users/${data.login}/followers`)

       const followersResult = await folowersResponse.json()
       console.log(followersResult,">>>")

       if(response.ok && folowersResponse.ok){
         setProfile(data)
         setTotalFollowersCount(followersResult.length)
       }else{
         setProfile({})
         setError("No record Found.")
       }

      } catch(error){
        // setError("Some Error Occured.")
      }

     
  }

  const handleChange = (event: any) => {
    const val  =  event.target.value as string
    setSearchField(val)
  }
  return (

    <Container>




      <Flex width="100%" height="100px" direction="row" justifyContent='space-between'>
        <Title>Github users</Title>

        <Button onClick={handleToggle}>Switch To {mode.toUpperCase()} Theme</Button>
      </Flex>
<hr/>
        <Flex direction="row" height="100px" width="400px"  justifyContent="center" align="center">

        
        <Input onChange={handleChange} />
        <Button onClick={handleGetApiRequest}> Search</Button>
      </Flex>



      {
        error ? <Text>{ error} </Text> : (
          <>
          {profile && (
            <div>
               <Avatar src={profile?.avatar_url} />
               <Text>Name: {profile?.login}</Text>
               <Text>Followers (count): {totalFollowers} </Text>
            </div>
          )}
          </>
        )
      }
    </Container>
  )
}

export default App
