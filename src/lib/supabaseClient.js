import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables not set. Supabase client will be a no-op in demo mode.')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
