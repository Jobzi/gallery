import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Polaroid } from '../../components/Polaroid'

const fetcher = (url) => fetch(url).then((res) => res.json()).then(({ data }) => data)

export default function ShareGallery () {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/gallery/${id}`, fetcher)

  // const [gallery, setGallery] = useState(null)
  // useEffect(() => {
  //   if (id) {
  //     fetch(`/api/gallery/${id}`).then(res => res.json()).then(data => {
  //       const { data: gallery } = data
  //       console.log('data', gallery)
  //       setGallery(gallery)
  //     })
  //   }
  // }, [id])

  if (error) {
    return <div>Error</div>
  }
  const handleHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>YawGallery | Wish</title>
      </Head>
      <button
        className="rounded-lg bg-slate-400 text-white p-2 ml-4 absolute top-5 hover:bg-slate-300 hover:-translate-x-1"
        onClick={handleHome}
        >Home</button>
      <div className='mt-8 flex items-center justify-center'>
          <h1
          className='text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-purple-300  font-licorice text-center'
          > {data?.tittle}
          </h1>
      </div>
      <section className='grid place-items-center mb-5'>
        <div className='flex flex-wrap'>
         {data?.timeline.map(({ url, legend }) => (
          <Polaroid key={url} src={url} alt={legend} legend={legend} width={'30'}/>
         ))}
         </div>
      </section>
      <div className='absolute bottom-5 right-4'>
        <h1 className='font-licorice text-3xl text-right'>To: {data?.to}</h1>
      </div>
    </>
  )
}
