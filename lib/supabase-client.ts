import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  // Do not throw on import — helpful for static analysis in CI — but warn at runtime if used without config.
  // The application must provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in environment.
  // See README.md for setup instructions.
  // eslint-disable-next-line no-console
  console.warn('Supabase environment variables are not set. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
}

const supabase = createClient(url ?? '', anonKey ?? '')

export default supabase
