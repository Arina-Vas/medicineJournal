import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from '@/app/providers/auth-provider/AuthProvider.tsx';
import { QueryProvider } from '@/app/providers/query-provider/QueryProvider.tsx';
import { router } from '@/app/router/router.tsx';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@/app/providers/theme-provider/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
