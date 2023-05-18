import { Box } from '@mui/material';

import { Link } from 'components';
import { AppRoute } from 'types';

import * as Styles from './Navbar.styles';
import { UserAvatar } from './userAvatar/UserAvatar';

const menuItems = [
  { title: 'Home', href: AppRoute.Home },
  { title: 'Fetching', href: AppRoute.Fetching },
];

export const Navbar = () => (
  <Box component="nav" sx={Styles.NavbarWrapper}>
    {menuItems.map(({ title, href }) => (
      <Link key={title} sx={Styles.NavButton} href={href}>
        {title}
      </Link>
    ))}
    <UserAvatar />
  </Box>
);
