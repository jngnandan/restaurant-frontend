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

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function AuthenticationForm() {
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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Link to='/forget'>
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
          </Link>
        </Group>
        <Button onClick={() => navigate('/')}  className='bg-blue-500' color="blue" variant="filled" fullWidth mt="xl">
           Sign in
      </Button>

      </Paper>
    </Container>
  );
}