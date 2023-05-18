import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { HomeView } from 'components';

const HomePage: NextPage = () => (
  <>
    <NextSeo title="Next.js Starter Boilerplate" description="This is a starter project for TSH Next.js application." />
    <HomeView />
  </>
);

export default HomePage;
