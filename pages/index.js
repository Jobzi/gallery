import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Polaroid } from '../components/Polaroid'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
  <>
    <Head>
        <title>YawGallery | Home</title>
    </Head>
    <Header/>
    <div className={styles.container}>
      <section className='grid place-items-center h-screen'>
        <div className='flex flex-wrap'>
          <div className='m-4 sm:w-2/5 md:w-3/5 lg:w-1/2'>
            <h1 className='lg:text-7xl md:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-400'>
              Create dream share experience, created for you and the most special ones.
            </h1>
            <button className='mt-8 p-4 bg-red-400 text-white font-bold rounded-md shadow-md hover:bg-red-300'>Lets start to share experience</button>
          </div>
          <Polaroid src={'https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg'} alt={'img 1'}/>
        </div>
      </section>
      <section className='grid place-items-center mt-4 mb-5'>
        <div className='w-2/3'>
          <h2 className='text-3xl mb-5 space-x-3 tracking-wide font-licorice'>&quot;life is a journey, and we are the people who are on it.&quot;</h2>
          <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisi ut ipsum lacinia posuere. Mauris efficitur ut velit sed congue. Etiam nisi dolor, egestas at sagittis sit amet, tristique a diam. Aenean interdum lacus turpis, at malesuada tellus varius vel. Maecenas at consectetur odio. Fusce viverra enim et lorem fermentum volutpat. Pellentesque at erat nunc. Phasellus eget gravida magna. Nunc porta eu odio ut ornare.
Sed accumsan sodales lectus. Aenean sodales vel mauris elementum tempus.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  </>
  )
}
