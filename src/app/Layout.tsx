import { Header } from '@/widgets/header/Header.tsx';
import s from './Layout.module.css';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={s.container}>
        <Outlet />
      </main>
    </>
  )
    ;
};
