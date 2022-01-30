import { supabase } from '../../../../lib/supabaseClient'

export default async function handler (req, res) {
  const { id } = req.query
  const { error } = await deleteGallery(id)
  if (error) {
    res.status(500).json({ error })
  }
  res.status(200).json({ message: 'Gallery deleted' })
}

const deleteGallery = async (id) => {
  const { error } = await supabase.from('gallery').update({ isDeleted: true }).eq('id', id)
  return { error }
}
