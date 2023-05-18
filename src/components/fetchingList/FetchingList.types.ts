import { Planet } from 'api/actions/planet/planet.types';

export type FetchingListProps = {
  isLoading: boolean;
  data?: Planet[];
};
