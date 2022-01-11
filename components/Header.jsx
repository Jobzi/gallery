import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useUser } from '../hooks/useUser'

const LayoutNav = ({ children, route }) => {
  return (
    <>
    {
        route !== '/gallery/[id]' ? children : null
    }
    </>
  )
}

export function Header () {
  const router = useRouter()
  const { route } = useMemo(() => router, [router])
  const { user, handleSignOut } = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const rederOptions = (user) => {
    return (
    <>
        <div>
            <Link href='/'>
                <a className="text-gray-800 dark:text-gray-200 border-b-2 border-pink-400 mx-1.5 sm:mx-6">home</a>
            </Link>
            {user &&
                <Link href='/dashboard'>
                    <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-pink-400 mx-1.5 sm:mx-6 lowercase ">{user?.email}</a>
                </Link> }
            <Link href='/gallery'>
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-pink-400 mx-1.5 sm:mx-6">Demo</a>
            </Link>
        </div>
        {user
          ? <a
                className="w-40 bg-slate-800 hover:bg-slate-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 flex items-center justify-center cursor-pointer"
                onClick={handleSignOut}
            >Sign Out</a>
          : <Link href='/login'>
            <a className="w-40 bg-slate-800 hover:bg-slate-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 flex items-center justify-center">login</a>
        </Link>}
    </>
    )
  }

  const toggleNav = () => {
    console.log('toggleNav')
    setIsOpen((prev) => !prev)
  }

  return (
    <LayoutNav route={route}>
        <nav className="bg-white dark:bg-gray-700 m-4 border rounded-lg">
            <div className="container p-2 mx-auto">
                <div className="flex items-center justify-between text-gray-600 capitalize dark:text-gray-300">
                    <Link href='/'>
                        <div>
                            <Image className='hover:scale-105' src="/wish.svg" alt="Vercel Logo" width={50} height={50} />
                        </div>
                    </Link>
                    {isMobile
                      ? <h1 className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-pink-400 mx-1.5 sm:mx-6 cursor-pointer'>Wish Gallery</h1>
                      : rederOptions(user) }
                   {isMobile &&
                   <button
                        className="flex items-center px-3 py-2 mr-2 border rounded text-pink-200 border-pink-300 hover:text-white hover:border-white"
                        onClick={toggleNav}
                        >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button> }

                </div>
            </div>
        </nav>
        {isOpen &&
            <nav className="sticky bg-white dark:bg-gray-700 ml-4 mr-4 mb-4 border rounded-lg ">
                <div className="w-full p-6 mx-auto">
                    <div className="flex flex-col items-center text-gray-600 capitalize dark:text-gray-300">
                        {rederOptions(user)}
                    </div>
                </div>
            </nav>
        }
    </LayoutNav>
  )
}
