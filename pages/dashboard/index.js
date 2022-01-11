import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Dashboard () {
  const { data } = useSWR('/api/gallery', fetcher)
  return (
    <>
      <Head>
        <title>YawGallery | Create New Gallery</title>
      </Head>
      <section>
        <ul className="bg-slate-100  p-4 m-5 rounded sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
          {data && data.map((gallery) => (
            <Link key={gallery.id}
              href={`/dashboard/new/${gallery.id}`}
            >
              <li >
                <div className='w-50 p-6 rounded-lg hover:bg-violet-400 hover:ring-violet-400 hover:shadow-md group bg-white ring-1 ring-gray-200 shadow-sm'>
                <h1 className="group-hover:text-white font-semibold text-gray-900">
                  {gallery?.tittle}
                </h1>
                <p className="group-hover:text-violet-200">{gallery?.description}</p>
                </div>
              </li>
            </Link>
          )
          )}
          <Link href='/dashboard/new'>
            <li className="flex">
              <a className="hover:border-violet-500 hover:border-solid hover:bg-white hover:text-violet-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium py-3">
                <svg className="group-hover:text-violet-500 mb-1 text-gray-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New project
              </a>
            </li>
          </Link>
        </ul>
      </section>
    </>)
}
