import React from 'react'
import Layout from '../components/Layout'
import { UserContext } from '../context/userContext'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
  <>
    <UserContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext>
  </>
  )
}

export default MyApp
