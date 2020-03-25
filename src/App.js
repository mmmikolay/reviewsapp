import React from 'react';
//APOLLO-CLIENT
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// ROUTER
import Router from './components/Router/Router';

//STYLES
import './index.css';



//APOLLO-CLIENT SETUP
const httpLink = createHttpLink({ 
  // uri: 'http://localhost:4000/graphql',
  uri:`${process.env.SERVER_URL}/graphql`,
  credentials: 'include' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
      <>
      <div id="max-width-wrapper">
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>   
      </div>
      </>
  )
}

export default App;
