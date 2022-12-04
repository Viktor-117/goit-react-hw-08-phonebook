import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

const Link = styled(NavLink)`
  display: block;
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
`;

export default function NotFound() {
  return (
    <div>
      <Title>The page is not found</Title>
      <Link to="/">Return to Home page</Link>
    </div>
  );
}
