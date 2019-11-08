import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { CategoriHeader } from '../components/style'

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>I want to be a todo app some day!</h1>
    <StyledTest>Im styled</StyledTest>
    <CategoriHeader>Teeest</CategoriHeader>
  </Layout>
)

const StyledTest = styled.h2`
  color: red;
  background: blue;
`

export default Home
