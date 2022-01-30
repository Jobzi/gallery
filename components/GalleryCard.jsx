import { motion } from 'framer-motion'
import Link from 'next/link'
import { varsCard } from '../styles/variants'

export default function GalleryCard ({ gallery, handleClick, index }) {
  return (
    <motion.div
      className='relative'
      custom={index} initial='initial' animate='animate' exit='exit' variants={varsCard}
      >
        <span className="absolute top-1 right-1">
        <button className="bg-red-500 rounded-full hover:bg-red-400" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        </span>
        <Link
        href={`/dashboard/new/${gallery.id}`} passHref
        >
        <li className='cursor-pointer'>
            <div className='w-50 p-6 rounded-lg hover:bg-violet-400 hover:ring-violet-400 hover:shadow-md group bg-white ring-1 ring-gray-200 shadow-sm'>
            <h1 className="group-hover:text-white font-semibold text-gray-900">
            {gallery?.title}
            </h1>
            <p className="group-hover:text-violet-200">{gallery?.description}</p>
            </div>
        </li>
        </Link>
    </motion.div>
  )
}
