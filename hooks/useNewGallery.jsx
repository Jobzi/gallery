import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useUser } from './useUser'
import { useRouter } from 'next/router'

const SUPABASE_URL = 'https://sbqspgtbzfgtyypagxbh.supabase.in/storage/v1/object/public/'

export default function useNewGallery (data) {
  const router = useRouter()
  const { title: titleProp, description: descriptionProp, timeline: timelineProps, to: toProps } = data
  // data to save
  const { user } = useUser()
  const [isNewGallery, setIsNewGallery] = useState(Boolean(data))
  const [title, setTitle] = useState(() => titleProp ?? '')
  const [description, setDescription] = useState(() => descriptionProp ?? '')
  const [to, setTo] = useState(() => toProps ?? '')
  const [timeLine, setTimeLine] = useState(() => timelineProps ?? [])
  const [gallery, setGallery] = useState(() => data ?? null)

  const [isEdited, setIsEdited] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedFile] = useState()

  const onSelectFile = file => {
    uplaodPhoto(file)
      .then(url => {
        setTimeLine((prev) => {
          const newTimeLine = [...prev, { url, legend: '' }]
          updateData(newTimeLine)
          return newTimeLine
        })
      }).catch(err => {
        console.warn(err)
      })
  }

  const uplaodPhoto = async (imageToUpload) => {
    const { name } = imageToUpload
    const splitName = name.split('.')
    const extension = splitName[splitName.length - 1]
    const fileName = `${Date.now()}.${extension}`
    const { data, error: errorSupabase } = await supabase.storage.from('gallery').upload(`${user.id}/${fileName}`, imageToUpload, {
      cacheControl: '3600',
      upsert: false
    })
    if (data) {
      const { Key } = data
      const FULL_URL = `${SUPABASE_URL}${Key}`
      return FULL_URL
    } else if (errorSupabase) {
      throw new Error(errorSupabase)
    }
  }

  const updateData = async (newTimeLine) => {
    const dataToSave = { title, description, timeline: newTimeLine ?? timeLine, to }
    console.log('data to save', dataToSave)
    const { data, error } = await supabase.from('gallery').update(dataToSave).match({ id: gallery.id })
    setIsEdited(false)
    console.log('response', data, error)
  }

  const createGallery = async () => {
    const dataToSave = { title, description, to, userUUID: user.id }
    const { data, error } = await supabase.from('gallery').insert(dataToSave)
    if (data) {
      const newValue = data[0]
      setGallery(newValue)
      setIsNewGallery(!false)
      router.push(`/dashboard/new/${newValue.id}`)
    }
    console.warn('Error', error)
  }

  const removeImage = async (index) => {
    setTimeLine((prev) => {
      const newTimeLine = [...prev]
      newTimeLine.splice(index, 1)
      updateData(newTimeLine)
      return newTimeLine
    })
  }

  return {
    title,
    description,
    to,
    timeLine,
    gallery,
    isEdited,
    isNewGallery,
    setTitle,
    setDescription,
    setTo,
    setTimeLine,
    setGallery,
    setIsEdited,
    onSelectFile,
    removeImage,
    updateData,
    setIsNewGallery,
    createGallery
  }
}
