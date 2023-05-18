import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';

import { ProfileView, ProfileProps } from 'components';
import { AppRoute } from 'types';
import { ssrQuery } from '../utils';

export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: AppRoute.Home,
        permanent: false,
      },
    };
  }

  const user = await ssrQuery('getMe', { token: session.apiToken });

  return {
    props: {
      user,
    },
  };
};

const ProfilePage: NextPage<ProfileProps> = ({ user }) => (
  <>
    <NextSeo
      title={`Profile of ${user.firstName} ${user.lastName} | Next.js Starter Boilerplate`}
      description="This is an example of user profile."
    />
    <ProfileView user={user} />
  </>
);

export default ProfilePage;
