/**
 * Example file for Apollo Client Services
 */
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import fetch from "isomorphic-unfetch";
// import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
});

// const errorLink = onError(({ response, graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.forEach((err, key) => {
//       console.info(err.extensions.contentful)
//       if (err.extensions.contentful.code) {
//         switch (err.extensions.contentful.code) {
//           case 'UNRESOLVABLE_LINK':
//           // response.errors[key] = null
//         }
//       }
//     })

//     if (response && response.errors) {
//       response.errors = response.errors.filter((el) => el != null) ?? null
//     }
//   }

//   if (networkError) console.info(`[Network error]: ${networkError}`)
// })

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  };
});

const contentful = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

export default contentful;
