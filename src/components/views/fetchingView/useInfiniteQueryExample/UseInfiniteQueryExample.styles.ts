import { Styles } from 'styles';

export const ButtonContainer: Styles = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: { xs: 'stretch', sm: 'center' },
  mt: 3,
};

export const Button: Styles = {
  mt: { xs: 2, sm: 0 },
  mx: { xs: 0, sm: 2 },
  height: 40,
};

export const CircularProgress: Styles = {
  mt: { xs: 3, sm: 0 },
  alignSelf: 'center',
};
