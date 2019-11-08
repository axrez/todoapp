import React from 'react'
import './style/globals.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = ({ children }) => <LayoutWrapper>{children}</LayoutWrapper>

const LayoutWrapper = styled.div`
  padding: 1rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
