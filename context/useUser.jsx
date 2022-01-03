import React, { createContext, useEffect, useState } from 'react'

const Context = createContext({})

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? null)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )
    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
  )
}

export default Context
