import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container, Title } from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    if (name === '' || email === '' || password === '') {
      toast.error('Please, input registration data!');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Register</Title>
      <Box
        autoComplete="off"
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': {
            // m: 1,
            width: '380px',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="E-mail"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleChange}
          sx={{ '& > :not(style)': { marginTop: '16px' } }}
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
              marginTop: '24px',
              width: '100px',
            },
          }}
        >
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
