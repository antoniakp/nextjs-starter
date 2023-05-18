import { Avatar, Box, Menu, MenuItem, MenuProps } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, MouseEvent } from 'react';

import { Link } from 'components';
import { AppRoute } from 'types';
import { useQuery } from 'hooks';

import * as Styles from './UserAvatar.styles';

export const signInWithMockedCredentials = () =>
  signIn('credentials', {
    username: 'john',
    password: 'doe123',
    redirect: false,
  });

export const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { status, data: session } = useSession();
  const isSignedIn = status === 'authenticated';
  const { data: user } = useQuery({
    query: 'getMe',
    args: { token: session?.apiToken ?? '' },
    options: { enabled: !!session },
  });
  const avatarSrc = isSignedIn ? user?.picture : '';

  const handleMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogin = () => {
    void signInWithMockedCredentials();
    handleClose();
  };

  const handleLogout = () => {
    void signOut({ callbackUrl: AppRoute.Home });
    handleClose();
  };

  const menuProps: MenuProps = {
    id: 'menu-appbar',
    anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    open: !!anchorEl,
    onClose: handleClose,
  };

  return (
    <Box>
      <Avatar onClick={handleMenu} src={avatarSrc} sx={Styles.Avatar} />
      <Menu {...menuProps}>
        {isSignedIn ? (
          <Box>
            <Link key="profile" href={AppRoute.Profile} sx={Styles.ProfileLink}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <MenuItem key="logout" onClick={handleLogout}>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={handleLogin}>Login</MenuItem>
        )}
      </Menu>
    </Box>
  );
};
