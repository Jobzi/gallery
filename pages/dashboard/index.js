import Head from 'next/head'
import { Header } from '../../components/Header'

export default function Dashboard () {
  return (
    <>
        <Head>
            <title>YawGallery | Dashboard</title>
        </Head>
        <Header />
        <div className="bg-slate-100 m-6 p-6 rounded-md">
            <h1>Cover</h1>
            <div className="m-5 p-5 border-dashed border-2 border-red-200 hover:border-red-500  rounded-md flex items-center justify-center bg-white">
                <h1 className="text-red-300 text-xs"> + Add cover</h1>
            </div>
        </div>
        <div className="bg-slate-100 mr-6 ml-6 p-6 rounded-md">
            <h1>Image</h1>
            <div className='flex flex-wrap'>
                <div className="m-5 p-5 border-dashed border-2 border-red-200 hover:border-red-500 rounded-md flex items-center justify-center bg-white w-80 h-80">
                    <h1 className="text-red-300 text-xs"> + Add cover</h1>
                </div>
            </div>
        </div>
    </>
  )
}
