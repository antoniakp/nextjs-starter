import { Alert, Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';

import { PageHeading } from 'components';

import * as Styles from './ProfileView.styles';
import { ProfileProps } from './ProfileView.types';

export const ProfileView = ({ user }: ProfileProps) => {
  const { firstName, lastName, email, city, picture } = user;

  return (
    <>
      <PageHeading title="Profile">
        This is an example of user profile witch uses <strong>Server Side Rendering</strong> to validate the user.
      </PageHeading>

      <Alert severity="info" sx={Styles.Alert}>
        Want to have fun? Try to access this page while not signed in.
      </Alert>
      <Divider sx={Styles.Divider} />

      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Welcome, {firstName} {lastName}!
        </Typography>
        <Image src={picture} alt={`${firstName} ${lastName}`} width={100} height={100} unoptimized />
        <Typography sx={Styles.UserInfo}>
          As we can see, you are{' '}
          <strong>
            {firstName} {lastName}
          </strong>{' '}
          from <strong>{city}</strong> and you use <strong>{email}</strong> as your email address.
        </Typography>
      </Box>
    </>
  );
};
