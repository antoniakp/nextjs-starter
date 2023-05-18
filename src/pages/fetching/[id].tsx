import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { dehydrate } from '@tanstack/react-query';

import { PlanetView } from 'components';
import { prefetchQueries, PrefetchQuery, ssrQuery } from 'utils';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = await prefetchQueries([new PrefetchQuery('getPlanetById', { id: `${params?.id}` })]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { count } = await ssrQuery('getPlanets', {});
  const paths = Array.from({ length: count + 1 }, (e, i) => ({ params: { id: `${i}` } }));

  return {
    paths,
    fallback: false,
  };
};

const PlanetPage: NextPage = () => (
  <>
    <NextSeo
      title="Planet example | Next.js Starter Boilerplate"
      description="This is an example of fetching data with our abstraction of react-query."
    />
    <PlanetView />
  </>
);

export default PlanetPage;
