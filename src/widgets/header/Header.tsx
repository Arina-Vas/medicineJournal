import { NavButton } from '@/shared/ui/nav-button/NavButton.tsx';
import HomeIcon from '@/shared/assets/images/Home.svg';
import GridIcon from '@/shared/assets/images/Grid.svg';

import s from './Header.module.css';
import { useSignOutMutation } from '@/features/login/lib/useLogin.ts';
import { useAuth } from '@/app/providers/auth-provider/use-auth.ts';
import { Button } from '@/shared/ui/button/Button.tsx';

export const Header = () => {
  const { mutate: signOut } = useSignOutMutation();

  const onLogout = () => {
    signOut();
  };

  const { user } = useAuth();

  return (
    <div className={s.headerWrapper}>
      <div className={s.navigation}>
        <NavButton title={'Home'}>
          <HomeIcon />
        </NavButton>
        <NavButton title={'Tables'} link={'/products'}>
          <GridIcon />
        </NavButton>
      </div>
      <div className={s.settings}>
        <Button variant={'outline'} onClick={onLogout}>
          {user ? 'LogOut' : 'SignIn'}
        </Button>
      </div>
    </div>
  );
};
