import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { useQuery } from 'hooks';
import { PageHeading } from 'components';

import * as Styles from './PlanetView.styles';

export const PlanetView = () => {
  const router = useRouter();
  const { data: planet } = useQuery({ query: 'getPlanetById', args: { id: `${router.query.id}` } });

  return planet ? (
    <>
      <PageHeading title={`Planet "${planet.name}" details`}>The climate there is {planet.climate}.</PageHeading>
      <Button variant="contained" onClick={() => router.back()} sx={Styles.Button}>
        Back
      </Button>
    </>
  ) : null;
};
