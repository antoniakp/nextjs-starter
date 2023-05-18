import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ssrMutation } from 'utils';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      // The following function should contain a logic to verify the user
      // and pass the response further. See definitions/next-auth.d.ts
      // for custom type definitions
      async authorize(credentials) {
        if (!credentials) return null;

        const { accessToken } = await ssrMutation('login', {
          username: credentials.username,
          password: credentials.password,
        });

        if (!accessToken) return null;

        return { apiToken: accessToken };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.apiToken = user.apiToken;
      return token;
    },
    async session({ session, token, user }) {
      session.apiToken = token.apiToken;
      return { apiToken: token.apiToken, expires: session.expires, user };
    },
  },
});
