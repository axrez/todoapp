import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from '../lib/Apollo'
import Layout from '../components/Layout'
import { CategoriHeader } from '../components/style'

const HELLO_QUERY = gql`
  query HelloQeury {
    getBooks {
      title
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  if (loading) return <div />

  console.log(data)

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{data.getBooks[0].title}</h1>
      <StyledTest>Im styled</StyledTest>
      <CategoriHeader>Teeest</CategoriHeader>
    </Layout>
  )
}

const StyledTest = styled.h2`
  color: red;
  background: blue;
`

export default withApollo(Home)
