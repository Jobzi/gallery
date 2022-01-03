import Link from 'next/link'

export function Header () {
  return (
        <nav className="bg-white dark:bg-gray-700 m-2 border rounded-lg">
            <div className="container p-2 mx-auto">
                <div className="flex items-center justify-between text-gray-600 capitalize dark:text-gray-300">
                    <Link href='/'>
                        <a className="text-gray-800 dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6">Icon</a>
                    </Link>
                    <div>
                        <Link href='/'>
                            <a className="text-gray-800 dark:text-gray-200 border-b-2 border-pink-400 mx-1.5 sm:mx-6">home</a>
                        </Link>
                        <Link href='/dashboard'>
                            <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-pink-400 mx-1.5 sm:mx-6">features</a>
                        </Link>
                    </div>
                    <Link href='/login'>
                        <a className="w-40 bg-slate-800 hover:bg-slate-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 flex items-center justify-center">login</a>
                    </Link>
                </div>
            </div>
        </nav>
  )
}
