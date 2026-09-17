import { ProtectedRoute } from '@/app/ProtectedRoute.tsx';
import { createBrowserRouter, Navigate } from 'react-router';
import Login from '@/pages/login/Login.tsx';
import { Spinner } from '@/shared/ui/spinner/Spinner.tsx';
import NotFound from '@/pages/not-found/NotFound.tsx';

export const router = createBrowserRouter(
  [
    {
      HydrateFallback: Spinner,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          element: <ProtectedRoute />,
          HydrateFallback: Spinner,
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard" replace />,
            },
            {
              path: '/dashboard',
              lazy: async () => {
                const module = await import('@/pages/dashboard/DashboardPage');
                return { Component: module.default };
              },
            },
            {
              path: '/products',
              lazy: async () => {
                const module = await import('@/pages/medications/MedicationList.tsx');
                return { Component: module.default };
              },
            },
            {
              path: '/products/:id',
              lazy: async () => {
                const module = await import('@/pages/medication/MedicineCard');
                return { Component: module.default };
              },
            },
            { path: '*', element: <NotFound /> },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  },
);
