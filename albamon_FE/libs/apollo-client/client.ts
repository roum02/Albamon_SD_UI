import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://albamon-sd-ui.onrender.com/',
  cache: new InMemoryCache(),
});
