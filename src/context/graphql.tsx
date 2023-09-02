import React, { useMemo } from 'react'

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { useAuth } from './auth'



const SPECKLE_SERVER_URL = 'https://speckle.xyz'

export const GraphqlProvider = ({ children }: any) => {

    const { token } = useAuth()

    const speckleServerLink = createHttpLink({
        uri: `${SPECKLE_SERVER_URL}/graphql`,
    })

    const authLink = useMemo(() => setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    }), [token])

    const client = useMemo(() => new ApolloClient({
        link: authLink.concat(speckleServerLink),
        cache: new InMemoryCache()
    }), [authLink, speckleServerLink])

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
