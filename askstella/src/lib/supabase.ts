import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wlvphorhwyudsqjwblke.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_du-WAKBEKByRR0PH3eGiQg_rgT_ExsP'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
