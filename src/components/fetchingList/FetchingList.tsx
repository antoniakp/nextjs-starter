import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { AppRoute } from '../../types';

import * as Styles from './FetchingList.styles';
import { FetchingListProps } from './FetchingList.types';

export const FetchingList = ({ data, isLoading }: FetchingListProps) => {
  const router = useRouter();
  if (isLoading) return <CircularProgress size={32} sx={Styles.CircularProgress} />;
  if (!data) return <Typography>There is nothing to display</Typography>;

  return (
    <Box>
      <Grid container spacing={2} sx={Styles.Grid}>
        {data.map(({ name }, i) => (
          <Grid key={name} item xs={6} sm={4} md={3}>
            <Paper sx={Styles.Item} onClick={() => router.push(`${AppRoute.Fetching}/${i + 1}`)}>
              {name}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
