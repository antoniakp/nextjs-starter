import { Alert, AlertProps, Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

import { AppRoute } from 'types';
import { Link, PageHeading } from 'components';

import * as Styles from './HomeView.styles';

export const HomeView = () => {
  const { status } = useSession();
  const isSignedIn = status === 'authenticated';

  const alertProps: AlertProps = {
    severity: isSignedIn ? 'success' : 'error',
    sx: Styles.Alert,
    children: isSignedIn ? (
      <>
        Congratulations! Now you get to know the secret – let&apos;s check{' '}
        <Link sx={Styles.ProfileLink} href={AppRoute.Profile}>
          your profile.
        </Link>
      </>
    ) : (
      'Access to your profile is strictly prohibited. Please login first!'
    ),
  };

  return (
    <>
      <PageHeading title="Home">
        This is a starter project for TSH Next.js application. Click on navigation links above to learn more.
      </PageHeading>
      <Box sx={Styles.LoginSectionWrapper}>
        <Typography variant="h5" component="h2" gutterBottom>
          We support JWT authentication
        </Typography>
        <Typography>You can try it using the avatar component in the navbar.</Typography>
        <Alert {...alertProps} />
      </Box>
    </>
  );
};
