import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ImageToUpload from '../../../components/ImageUpload'
import { useUser } from '../../../hooks/useUser'
import { supabase } from '../../../lib/supabaseClient'

export default function NewGallery () {
  const { user } = useUser()
  const router = useRouter()
  const { params } = React.useMemo(() => router.query, [router.query])
  console.log(params)
  // data to save
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [editor, setEditor] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedFile] = useState()
  // const [images, setImages] = useState([])
  const [timeLine, setTimeLine] = useState([])

  useEffect(() => {
    if (params) {
      const [id] = params
      fetch(`/api/gallery/${id}`).then(res => res.json()).then(data => {
        const { data: gallery } = data
        const { tittle: title, description, timeline } = gallery
        // const images = timeline?.map(({ url }) => url)
        setTimeLine(timeline)
        setTitle(title)
        setDescription(description)
        // setImages(images)
        // console.log('data', images)
        console.log('gallery of effect', gallery)
      })
    }
  }, [params])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
    }
    // I've kept this example simple by using the first image instead of multiple
    // console.log('e.target.files', e.target.files)
    // uplaodPhoto(e.target.files[0]).then(url => {
    //   setImages((prev) => {
    //     return [...prev, url]
    //   })
    // })
  }

  const onConsole = (e) => {
    console.log('onConsole', timeLine)
  }

  // eslint-disable-next-line no-unused-vars
  const uplaodPhoto = async (imageToUpload) => {
    /* const res = await fetch('/api/upload', {
      method: 'POST',
      body: data
    })
    const { data: url } = await res.json() */
    const URL = 'https://sbqspgtbzfgtyypagxbh.supabase.in/storage/v1/object/public/'
    const { name, error } = imageToUpload
    console.log('imageToUpload', name, 'user', user.id)
    const { data } = await supabase.storage.from('gallery').upload(`${user.id}/${name}`, imageToUpload, {
      cacheControl: '3600',
      upsert: false
    })
    if (data) {
      const { Key } = data
      const FULL_URL = `${URL}${Key}`
      console.log('FULL_URL', FULL_URL)
      return FULL_URL
    } else if (error) {
      throw new Error(error)
    }
  }
  return (
    <>
        <Head>
            <title>YawGallery | Create New Gallery</title>
        </Head>
        <div className="bg-slate-100 m-6 p-6 rounded-md flex flex-col justify-center">
            <input
                className='text-gray-700 bg-white focus:ring-2 focus:ring-violet-400 focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-5xl text-ellipsis
                border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal border-0'
                type='text'
                placeholder='🤗 Say de best title for your gallery'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className='text-gray-700 bg-white  focus:ring-2 focus:ring-violet-300  focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-ls
                border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal border-0'
                type='text'
                placeholder='Say something about your gallery'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {/* <a href="#" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-700 font-medium py-3">
                <svg className="group-hover:text-blue-500 mb-1 text-gray-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New Cover
            </a> */}
        </div>
        <div className='relative'>
          <div className='absolute -top-8 right-2 '>
            <button
                className="
                text-white px-4 w-auto h-10 bg-purple-600 rounded-full hover:bg-purple-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block mr-1">
                <path fill="#FFFFFF" d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                        c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"/>
              </svg>
              { editor && 'Save Changes'}
            </button>
          </div>
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
                {/* <div className='flex flex-wrap items-center'>
                  {images?.map((image, index) => {
                    return <ImageToUpload key={index} src={ image }/>
                  }).reverse()}
                </div> */}
                <div className='flex flex-wrap items-center'>
                  {timeLine?.map((data, index) => {
                    return <ImageToUpload key={index} src={ data } index={index} setTimeLine={setTimeLine}/>
                  }).reverse()}
                </div>
                <button onClick={onConsole}>CONSOLE INFO</button>
            </div>
        </div>
    </>
  )
}
