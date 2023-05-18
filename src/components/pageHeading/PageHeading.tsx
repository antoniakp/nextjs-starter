import { Typography } from '@mui/material';

import { PageHeadingProps } from './PageHeading.types';

export const PageHeading = ({ title, children }: PageHeadingProps) => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      {title}
    </Typography>
    {children && <Typography gutterBottom>{children}</Typography>}
  </>
);
