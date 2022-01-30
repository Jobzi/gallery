import Head from 'next/head'
import ImageToUpload from '../../../components/ImageUpload'
import Modal from '../../../components/Modal'
import { supabase } from '../../../lib/supabaseClient'
import { confirmAlert } from 'react-confirm-alert'
import useNewGallery from '../../../hooks/useNewGallery'
import { FileUploader } from 'react-drag-drop-files'

const fileTypes = ['JPG', 'PNG', 'JPEG', 'GIF']

export default function NewGallery ({ data }) {
  const {
    title,
    description,
    to,
    timeLine,
    isEdited,
    isNewGallery,
    setTitle,
    setDescription,
    setTo,
    setTimeLine,
    setIsEdited,
    onSelectFile,
    removeImage,
    updateData,
    createGallery
  } = useNewGallery(data)

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
                onChange={(e) => {
                  setTitle(e.target.value)
                  setIsEdited(true)
                }}
            />
            <input
                className='text-gray-700 bg-white  focus:ring-2 focus:ring-violet-300  focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-ls
                border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal border-0'
                type='text'
                placeholder='Say something about your gallery'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                  setIsEdited(true)
                }}
            />
              <input
                className='w-1/3 text-gray-700 bg-white  focus:ring-2 focus:ring-violet-300  focus:outline-none focus:shadow-outline tracking-normal text-sm sm:text-ls
                border-gray-300 rounded-lg py-2 px-4 mb-2 block appearance-none leading-normal border-0'
                type='text'
                placeholder='Person to contact'
                value={to}
                onChange={(e) => {
                  setTo(e.target.value)
                  setIsEdited(true)
                }}
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
                text-white px-4 w-auto h-10 bg-purple-600 rounded-full hover:bg-purple-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                onClick={() => {
                  if (!isNewGallery) {
                    createGallery()
                  } else {
                    updateData()
                  }
                }}
                disabled={!isEdited}
              >
              <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block mr-1">
                <path fill="#FFFFFF" d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                        c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"/>
              </svg>
              { isEdited && 'Save Changes'}
            </button>
          </div>
        </div>
        <div className="bg-slate-100 mr-6  ml-6 p-6 rounded-md">
            <div>
            <FileUploader
              handleChange={onSelectFile}
              label="Upload Images"
              name="file"
              types={fileTypes}
              disabled={!isNewGallery}
              maxSize={4}
              onSizeError={(err) => {
                console.log(err)
              }}
              />
                <div className='flex flex-wrap items-center'>
                  {timeLine?.map((data, index) => {
                    return (
                      <ImageToUpload
                        key={index}
                        src={ data }
                        index={index}
                        setTimeLine={setTimeLine}
                        setIsEdited={setIsEdited}
                        showModal={() => {
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <Modal
                                  key={index}
                                  title='Alert you want to delete this image?'
                                  description={'with legend: ' + data?.legend}
                                  handleClose={onClose}
                                  handleSave={() => {
                                    removeImage(index)
                                    onClose()
                                  }}
                                />
                              )
                            }
                          })
                        }}
                      />
                    )
                  }).reverse()}
                </div>
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const { params: ids } = params
  if (typeof ids === 'undefined') {
    return {
      props: {
        data: false
      }
    }
  }
  const { data, error } = await supabase.from('gallery').select('*').eq('id', ids[0]).single()
  error && console.log(error)

  return {
    props: {
      data: data
    }
  }
}
