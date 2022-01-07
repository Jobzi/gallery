import { supabase } from '../../../lib/supabaseClient'

export default async function handler (req, res) {
  const { id } = req.query
  const { data, error } = await getSingleGallery(id)
  if (error) {
    res.status(500).json({ error })
  } else {
    res.status(200).json({ data })
  }
}

const getSingleGallery = async (id) => {
  const { data, error } = await supabase.from('gallery').select('*').eq('id', id).single()
  return { data, error }
}
