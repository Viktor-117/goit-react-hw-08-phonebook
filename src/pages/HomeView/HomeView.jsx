import { Title, Link } from './HomeView.styled';

export default function HomeView() {
  return (
    <Title>
      Please {<Link to={'register'}>register</Link>} or{' '}
      {<Link to={'login'}>login</Link>} to access contacts page!
    </Title>
  );
}
