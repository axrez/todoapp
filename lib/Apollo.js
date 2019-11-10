import ApolloClient from 'apollo-boost'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'
import { InMemoryCache } from 'apollo-cache-inmemory'

export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Get the initial props like usual with next.js
  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx
    const apolloClient = (ctx.apolloClient = initApolloClient())

    let pageProps = {}
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    // Code only running on the server
    if (typeof window === 'undefined') {
      // If the request is done return the page props
      if (ctx.res && ctx.res.finished) {
        return pageProps
      }

      try {
        // Render the AppTree with apollo data
        const { getDataFromTree } = await import('@apollo/react-ssr')
        await getDataFromTree(
          <AppTree pageProps={{ ...pageProps, apolloClient }} />
        )
      } catch (e) {
        console.error(e)
      }

      // getDataFromTree does not call componentWillUnmount so the head
      // side effect needs to be cleared manually.
      Head.rewind()
    }

    const apolloState = apolloClient.cache.extract()

    return {
      ...pageProps,
      apolloState,
    }
  }

  return WithApollo
}

// Creating the apollo client
const initApolloClient = (initialState = {}) => {
  // Sets ssr mode to true on the server
  const ssrMode = typeof window === 'undefined'

  // Create/restore apollo cache
  const cache = new InMemoryCache().restore(initialState)

  const client = new ApolloClient({
    ssrMode,
    uri: 'http://localhost:3000/api/gql',
    fetch,
    cache,
  })

  return client
}
