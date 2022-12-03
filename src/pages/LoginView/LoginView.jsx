import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container, Title } from './LoginView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Login</Title>
      <Box
        autoComplete="off"
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '380px',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <TextField
          id="email"
          name="email"
          label="E-mail"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handleChange}
          sx={{ '& > :not(style)': { marginTop: '16px' } }}
        />
        <Box
          sx={{
            '& > :not(style)': {
              marginTop: '16px',
              width: '100px',
            },
          }}
        >
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
