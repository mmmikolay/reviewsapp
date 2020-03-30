import React, { useState } from 'react';
import Cookies from 'js-cookie';

//APOLLO-CLIENT
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// ROUTER
import Router from './components/Router/Router';

//CONTEXT
import AuthContext from './context/auth-context';

//STYLES
import './index.css';


//APOLLO-CLIENT SETUP
const httpLink = createHttpLink({ 
  // uri: 'http://localhost:4000/graphql',
  uri:`${process.env.REACT_APP_SERVER_URL}/graphql`,
  credentials: 'include' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const App = () => {
  const [success, setSuccess] = useState (false)
  
  const login = () => {
    setSuccess(Cookies.get("signedin"));
  }
  const logout = () => {
    setSuccess(false);
    Cookies.remove("signedin")
  }

  return (
      <>
      <div id="max-width-wrapper">
        <ApolloProvider client={client}>
          <AuthContext.Provider value={{
          success,
          login,
          logout
          }}>
            <Router />  
          </AuthContext.Provider>
        </ApolloProvider>   
      </div>
      </>
  )
}

export default App;