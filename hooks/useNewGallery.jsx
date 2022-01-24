import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useUser } from './useUser'

export default function useNewGallery (data) {
  const { title: titleProp, description: descriptionProp, timeline: timelineProps, to: toProps } = data
  // data to save
  const { user } = useUser()
  const [title, setTitle] = useState(() => titleProp ?? '')
  const [description, setDescription] = useState(() => descriptionProp ?? '')
  const [to, setTo] = useState(() => toProps ?? '')
  const [timeLine, setTimeLine] = useState(() => timelineProps ?? [])
  const [gallery, setGallery] = useState(() => data ?? null)

  const [isEdited, setIsEdited] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [_, setSelectedFile] = useState()

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
    }

    uplaodPhoto(e.target.files[0])
      .then(url => {
        setTimeLine((prev) => {
          const newTimeLine = [...prev, { url, legend: '' }]
          updateData(newTimeLine)
          return newTimeLine
        })
      })
  }

  const uplaodPhoto = async (imageToUpload) => {
    const URL = 'https://sbqspgtbzfgtyypagxbh.supabase.in/storage/v1/object/public/'
    const { name, error } = imageToUpload
    const { data } = await supabase.storage.from('gallery').upload(`${user.id}/${name}`, imageToUpload, {
      cacheControl: '3600',
      upsert: false
    })
    if (data) {
      const { Key } = data
      const FULL_URL = `${URL}${Key}`
      return FULL_URL
    } else if (error) {
      throw new Error(error)
    }
  }

  const updateData = async (newTimeLine) => {
    const dataToSave = { title, description, timeline: newTimeLine ?? timeLine, to }
    console.log('data to save', dataToSave)
    const { data, error } = await supabase.from('gallery').update(dataToSave).match({ id: gallery.id })
    setIsEdited(false)
    console.log('response', data, error)
  }

  const removeImage = async (index) => {
    setTimeLine((prev) => {
      const newTimeLine = [...prev]
      newTimeLine.splice(index, 1)
      return newTimeLine
    })
    // await updateData(newTimeLine)
  }

  return {
    title,
    description,
    to,
    timeLine,
    gallery,
    isEdited,
    setTitle,
    setDescription,
    setTo,
    setTimeLine,
    setGallery,
    setIsEdited,
    onSelectFile,
    removeImage,
    updateData
  }
}
