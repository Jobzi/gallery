import { useContext, useState } from 'react'
import UserContext from '../context/userContext'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export function useUser () {
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)
  const router = useRouter()

  const handleLogin = async (email, password) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email, password })
      router.push('/dashboard')
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ provider: 'google' })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      router.push('/')
      if (error) throw error
      alert('You have been signed out!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleLogin, handleLoginWithGoogle, handleSignOut, user }
}
