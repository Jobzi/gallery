import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import ImageToUpload from '../../components/ImageUpload'

export default function Dashboard () {
  const [selectedFile, setSelectedFile] = useState()
  const [images, setImages] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  useEffect(() => {
    if (images.length > 0) {
      console.log('images', images)
    }
  }, [images])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    console.log('e.target.files', e.target.files)
    setSelectedFile(e.target.files[0])
    setImages((prev) => {
      return [...prev, e.target.files[0]]
    })
  }
  return (
    <>
        <Head>
            <title>YawGallery | Dashboard</title>
        </Head>
        <Header />
        <div className="bg-slate-100 m-6 p-6 rounded-md">
            <input
                className='text-gray-700 bg-white focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-5xl text-ellipsis
                border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal border-0'
                type='text'
                placeholder='🤗 Say de best title for your gallery'
            />
            <input
                className='text-gray-700 bg-white focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-ls
                border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal border-0'
                type='text'
                placeholder='🤗 Say something about your gallery'
            />
            {/* <a href="#" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-700 font-medium py-3">
                <svg className="group-hover:text-blue-500 mb-1 text-gray-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New Cover
            </a> */}
        </div>
        <div className="bg-slate-100 mr-6  ml-6 p-6 rounded-md">
            <div>
            <input type="file" className="
                mb-4
                block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-500 file:text-violet-200
                hover:file:bg-violet-100
                hover:file:text-violet-500
                "
                name='file'
                multiple={false}
                onChange={onSelectFile} />
                <div className='flex flex-wrap align-baseline'>
                  {images.map((image, index) => {
                    return <ImageToUpload key={index} src={URL.createObjectURL(image)}/>
                  }).reverse()}
                </div>
            </div>
        </div>
    </>
  )
}
