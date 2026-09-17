import s from './NavButton.module.css';
import { Link } from 'react-router';
import type { ReactNode } from 'react';

type Props = {
  title: string;
  link?: string;
  children?: ReactNode;
  className?: string;
};

export const NavButton = ({ title, className, link, children }: Props) => {
  return (
    <Link to={link || '/'} className={`${s.wrapper} ${className}`}>
      {children}
      <span>{title}</span>
    </Link>
  );
};
