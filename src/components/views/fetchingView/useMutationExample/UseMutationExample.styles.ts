import { Styles } from 'styles';

export const Button: Styles = {
  mx: { xs: 0, sm: 2 },
  mt: { xs: 2, sm: 0 },
  height: 40,
};

export const AddPlanetContainer: Styles = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'stretch',
  mb: 2,
  mt: 4,
};

export const CircularProgress: Styles = {
  mt: { xs: 3, sm: 0 },
  alignSelf: 'center',
};
