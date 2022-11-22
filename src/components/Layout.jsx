import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import styled from 'styled-components';
import AppBar from 'components/AppBar';

const Box = styled.div`
  max-width: 100%;
`;

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer
        autoClose={3000}
        theme="colored"
        style={{ fontSize: '18px' }}
      />
    </Box>
  );
}
