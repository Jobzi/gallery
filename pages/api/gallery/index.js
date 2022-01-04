import { supabase } from '../../../lib/supabaseClient'

export default async function handler (req, res) {
  const { data, error } = await getGallery()
  if (error) {
    res.status(500).json({ error })
  } else {
    res.status(200).json({ data })
  }
}

const getGallery = async () => {
  const { data, error } = await supabase.from('gallery').select('*').single()
  return { data, error }
}
