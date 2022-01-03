import React from 'react'
import { Header } from '../components/Header'
import { UserContext } from '../context/userContext'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
  <>
    <UserContext>
      <Header />
      <Component {...pageProps} />
    </UserContext>
  </>
  )
}

export default MyApp
