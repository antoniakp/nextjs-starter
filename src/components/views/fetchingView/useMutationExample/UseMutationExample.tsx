import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import { useMutation } from 'hooks';
import { Section } from '../section/Section';

import * as Styles from './UseMutationExample.styles';

export const UseMutationExample = () => {
  const { mutate, isLoading, data } = useMutation('addPlanet');
  const [name, setName] = useState('Earth');
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    await mutate({ name, climate: 'mild' });
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  return (
    <Section
      title={<code>useMutation</code>}
      description={
        <>
          This is an example of sending a <code>POST</code> request with <code>useMutation</code>:
        </>
      }
      ref={ref}
    >
      <Box sx={Styles.AddPlanetContainer}>
        <TextField
          label="Set planet name"
          size="small"
          value={name}
          disabled={isLoading}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <Button variant="contained" disabled={isLoading || name.length === 0} onClick={handleClick} sx={Styles.Button}>
          Add new planet
        </Button>
        {isLoading && <CircularProgress size={32} sx={Styles.CircularProgress} />}
      </Box>

      {data && (
        <>
          <Typography>Server responded with:</Typography>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </Section>
  );
};
