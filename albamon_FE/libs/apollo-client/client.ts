import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  //uri: 'https://albamon-sd-ui.onrender.com/',
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
