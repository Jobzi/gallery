import Head from 'next/head'
import { Header } from '../../components/Header'
import { Polaroid } from '../../components/Polaroid'

export default function Gallery () {
  return (
    <>
    <Head>
        <title>YawGallery | Demo</title>
    </Head>
    <Header />
      <div className='flex items-center justify-center'>
        {/* <img
          alt='Mountains'
          className='w-screen h-40 rounded shadow-2xl grayscale '
          src='https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg'
          style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          /> */}
          <h1
          className='text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-purple-300  font-licorice text-center'
          //  style={{ position: 'absolute' }}
          > Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
          </h1>
      </div>
      <section className='grid place-items-center mt-4 mb-5'>
        <div className='flex flex-wrap'>
          <Polaroid src={'https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg'} alt={'img 1'} width={'30'}/>
          <Polaroid src={'https://image.ibb.co/crFarc/pexels_photo_100756.jpg'} alt={'img 1'} width={'30'}/>
          <Polaroid src={'https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg'} alt={'img 1'} width={'30'}/>
        </div>
      </section>
    </>
  )
}
