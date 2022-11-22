import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  RegisterForm,
  InputName,
  StyledInput,
  RegisterButton,
  Box,
  Title,
} from './RegisterView.styled';

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <Title>Register Page</Title>
      <RegisterForm autoOcmplete="off" onSubmit={handleSubmit}>
        <InputName>
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </InputName>

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

        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </Box>
  );
}
