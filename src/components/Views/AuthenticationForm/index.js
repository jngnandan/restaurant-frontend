import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useCookies } from 'react-cookie'


import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { useState } from 'react';

export function AuthenticationForm() {
  const [username, setUsername] = useState('rahul')
  const [password, setPassword] = useState('rahul@2021')
  const [submitError, setSubmitError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);  
  
  const onChangeEmail = (e) => {
    setUsername(e.currentTarget.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  const onSubmitSuccess = (jwt_token) => {
  //   Cookies.set('jwtToken', jwt_token, 
  //   {
  //     expires: 30,
  //     path: '/',
  //   }, 
  //  )
  setCookie('jwt_token', jwt_token, { path: '/' });

    navigate('/')
  }

  // console.log('cool ' + cookies)



  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true){
      onSubmitSuccess(data)
    }
    else{
      setErrorMessage('Entered details are wrong')
    }
    // console.log(data.jwt_token)
  }

  const navigate = useNavigate()

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link to='/signup'>
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput value={username} onChange={onChangeEmail} label="Password" placeholder="you@mantine.dev" required />
        <PasswordInput value={password} onChange={onChangePassword} label="Password" placeholder="Your password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Link to='/forget'>
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
          </Link>
        </Group>
        <Button onClick={submitForm}  className='bg-blue-500' color="blue" variant="filled" fullWidth mt="xl">
           Sign in
      </Button>
      <Text size='sm' color='red' mt={4}>
      {errorMessage}
      </Text>


      </Paper>
    </Container>
  );
}