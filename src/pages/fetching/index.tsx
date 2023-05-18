import { dehydrate } from '@tanstack/react-query';
import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';

import { prefetchQueries, PrefetchQuery } from 'utils';
import { FetchingView } from 'components';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = await prefetchQueries([new PrefetchQuery('getPlanets', {})]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const FetchingPage: NextPage = () => (
  <>
    <NextSeo
      title="Fetching example | Next.js Starter Boilerplate"
      description="This is an example of fetching data with our abstraction of react-query."
    />
    <FetchingView />
  </>
);

export default FetchingPage;
