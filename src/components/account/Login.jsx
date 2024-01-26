import React from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import imageURL from '../../images/blog.png'


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  justify-content: center;
  box-shadow: 5px 0 10px 0 rgba(0,0,0,0.5);
 
`
const Image = styled('img')({
  width: 300,
  alignContent: 'center',
  display: 'flex',
  margin: 'auto',
  padding: '10px',

})

const Wrapper = styled(Box)`
   padding: 20px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p{
      margin-top: 15px;
    }
`

const SignUpButton = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const LoginButton = styled(Button)`
  text-transform: none;
`
const Login = () => {

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Login" />
        <Wrapper>
          <TextField variant="standard" label="Username"/>
          <TextField variant="standard" label="Passward"/>
          <LoginButton variant="contained">Login</LoginButton>
          <Typography style={{textAlign: 'center'}}>OR</Typography>
          <SignUpButton>Create an Account</SignUpButton>
        </Wrapper>
      </Box>
    </Component>

  )
}

export default Login;