import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  LoginForm,
  InputName,
  StyledInput,
  LoginButton,
  Box,
  Title,
} from './LoginView.styled';

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
    <Box>
      <Title>Login</Title>
      <LoginForm autoOcmplete="off" onSubmit={handleSubmit}>
        <InputName>
          E-mail
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputName>

        <InputName>
          Password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </InputName>

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </Box>
  );
}
