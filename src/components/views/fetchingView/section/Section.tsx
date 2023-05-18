import { Box, Divider, Typography } from '@mui/material';
import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as Styles from '../FetchingView.styles';

import { SectionProps } from './Section.types';

const SectionComponent: ForwardRefRenderFunction<HTMLDivElement, SectionProps> = (
  { title, description, children },
  ref,
) => (
  <Box ref={ref}>
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    {description && <Typography>{description}</Typography>}
    {children}
    <Divider sx={Styles.Divider} />
  </Box>
);

export const Section = forwardRef(SectionComponent);
