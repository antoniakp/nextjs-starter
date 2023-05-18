import { Container } from '@mui/material';

import { Header } from '../header/Header';

import * as Styles from './Layout.styles';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container component="main" maxWidth="md" sx={Styles.Container}>
      {children}
    </Container>
  </>
);
