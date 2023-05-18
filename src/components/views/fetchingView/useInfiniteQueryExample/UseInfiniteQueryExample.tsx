import { Box, Button, CircularProgress } from '@mui/material';
import { useRef } from 'react';

import { FetchingList } from 'components';
import { useInfiniteQuery } from 'hooks';
import { Section } from '../section/Section';

import * as Styles from './UseInfiniteQueryExample.styles';

export const UseInfiniteQueryExample = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useInfiniteQuery({
    query: 'getPlanetsInfinite',
    options: { getNextPageParam: ({ next }) => next?.slice(-1) },
  });

  const ref = useRef<null | HTMLDivElement>(null);

  const names = data?.pages.flatMap((x) => x.results);
  const currentPage = data?.pages?.length ?? 0;
  const totalCount = data?.pages[0].count ?? 0;

  const handleFetchNextPage = async () => {
    await fetchNextPage();
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 80);
  };

  return (
    <Section
      ref={ref}
      title={<code>useInfiniteQuery</code>}
      description={
        <>
          Initial data is being fetched via <code>getStaticProps</code>, but you can fetch more on the client.
        </>
      }
    >
      <Box sx={Styles.ButtonContainer}>
        <Box>
          Current page: <strong>{currentPage}</strong> | Total records <strong>{totalCount}</strong>
        </Box>
        <Button
          variant="contained"
          disabled={!hasNextPage || isFetching}
          onClick={handleFetchNextPage}
          sx={Styles.Button}
        >
          Fetch next page
        </Button>
        {data && isFetching && <CircularProgress size={32} sx={Styles.CircularProgress} />}
      </Box>
      <FetchingList data={names} isLoading={isLoading} />
    </Section>
  );
};
