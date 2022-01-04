import React from 'react'
import { UserContext } from '../context/userContext'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
  <>
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  </>
  )
}

export default MyApp
