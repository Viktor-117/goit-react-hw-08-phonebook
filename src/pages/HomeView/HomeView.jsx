import { Title, Link } from './HomeView.styled';
import { useAuth } from 'hooks';

export default function HomeView() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Title>Welcome to Phonebook application!</Title>
      {!isLoggedIn && (
        <Title>
          Please {<Link to={'register'}>register</Link>} or{' '}
          {<Link to={'login'}>login</Link>} to access contacts page!
        </Title>
      )}
    </div>
  );
}
