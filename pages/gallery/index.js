import { motion } from 'framer-motion'
import { Polaroid } from '../../components/Polaroid'
import HeadSeo from '../../components/Seo'
import { fadeAnimation } from '../../styles/variants'

export default function Gallery ({ data }) {
  return (
    <>
      <HeadSeo section='Demo'/>
      <motion.div
        initial="initial" animate="animate" variants={fadeAnimation}
        className='flex items-center justify-center'>
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
      </motion.div>
      <section className='grid place-items-center mt-4 mb-5'>
        <div className='flex flex-wrap'>
          {data.map((node) => (
              <Polaroid key={node.image} src={node.image} legend={node.title} alt={'img 1'} width={'30'}/>
          ))}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps () {
  const data = [
    { image: 'https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg', title: 'London' },
    { image: 'https://image.ibb.co/crFarc/pexels_photo_100756.jpg', title: 'Florianopolis' },
    { image: 'https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg', title: 'Camera' }
  ]
  return {
    props: {
      data: data
    }
  }
}
