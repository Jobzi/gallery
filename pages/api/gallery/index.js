import { supabase } from '../../../lib/supabaseClient'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    const { data, error } = await getGallery()
    if (error) {
      res.status(500).json({ error })
    } else {
      res.status(200).json({ data })
    }
  } else if (req.method === 'POST') {
    const { data, error } = await supabase.from('gallery').insert({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      created_at: new Date()
    }).returning('*').single()

    if (error) {
      res.status(500).json({ error })
    } else {
      res.status(200).json({ data })
    }
  }
}

const getGallery = async () => {
  const { data, error } = await supabase.from('gallery').select('*').single()
  return { data, error }
}
