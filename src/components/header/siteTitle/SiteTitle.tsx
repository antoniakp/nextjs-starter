import { Box, Container, Typography } from '@mui/material';

import TshLogo from 'assets/tsh-logo.svg';

import * as Styles from './SiteTitle.styles';

export const SiteTitle = () => (
  <Box sx={Styles.Wrapper}>
    <Container sx={Styles.Container}>
      <Box sx={Styles.Logo}>
        <TshLogo />
      </Box>
      <Typography variant="h5" component="h1">
        Next.js Starter Boilerplate
      </Typography>
    </Container>
  </Box>
);
