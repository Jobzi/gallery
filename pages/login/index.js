import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { useUser } from '../../hooks/useUser'
export default function Login () {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, handleLoginWithGoogle } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <>
    <Header />
      <div className="grid place-items-center h-screen">
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div>
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-5xl mb-1">Hello Again!</h1>
            <p className="text-xl font-normal text-gray-600 mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Full name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="block w-full bg-red-400 hover:bg-red-300 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          </form>
          <button
            className="block w-full bg-yellow-400 hover:bg-yellow-300 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={handleLoginWithGoogle}
          >GOOGLE</button>
          <span className="text-sm ml-2 hover:text-red-500 cursor-pointer">Forgot Password ?</span>
          </div>
        </div>
      </div>
    </>
  )
}
