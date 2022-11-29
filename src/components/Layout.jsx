import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import AppBar from 'components/AppBar';

const Box = styled.div`
  max-width: 100%;
`;

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={<RotatingLines strokeColor="#4fa94d" />}>
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
