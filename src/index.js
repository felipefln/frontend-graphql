import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import App from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const ApolloApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <ApolloApp />
  </React.StrictMode>,
  document.getElementById('root')
);