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
  
  export function SignupForm() {
    return (
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Create an account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" component={Link} to="/login">
            Log in
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Name" placeholder="John Doe" required />
          <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm Password" placeholder="Confirm your password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="I agree to the terms and conditions" />
          </Group>
          <Button className='bg-blue-500' color="blue" variant="filled" fullWidth mt="xl">
             Sign up
        </Button>
  
        </Paper>
      </Container>
    );
  }
  