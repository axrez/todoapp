import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>I want to be a todo app some day!</h1>
    <StyledTest>Im styled</StyledTest>
  </div>
)

const StyledTest = styled.h2`
  color: red;
  background: blue;
`

export default Home
