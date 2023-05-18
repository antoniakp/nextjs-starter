import { Divider } from '@mui/material';

import { PageHeading } from 'components';

import { UseQueryExample } from './useQueryExample/UseQueryExample';
import { UseInfiniteQueryExample } from './useInfiniteQueryExample/UseInfiniteQueryExample';
import { UseMutationExample } from './useMutationExample/UseMutationExample';
import * as Styles from './FetchingView.styles';

export const FetchingView = () => {
  return (
    <>
      <PageHeading title="Fetching example">
        This is an example of fetching data with our abstraction of react-query.
      </PageHeading>
      <Divider sx={Styles.Divider} />

      <UseQueryExample />
      <UseMutationExample />
      <UseInfiniteQueryExample />
    </>
  );
};
