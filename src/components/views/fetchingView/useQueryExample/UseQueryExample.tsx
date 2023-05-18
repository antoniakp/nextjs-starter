import { FetchingList } from 'components';
import { useQuery } from 'hooks';
import { Section } from '../section/Section';

export const UseQueryExample = () => {
  const { data: planets, isLoading: arePlanetsLoading } = useQuery({ query: 'getPlanets' });

  return (
    <Section
      title={<code>useQuery</code>}
      description={
        <>
          This data is being fetched via <code>getStaticProps</code>.
        </>
      }
    >
      <FetchingList data={planets?.results} isLoading={arePlanetsLoading} />
    </Section>
  );
};
