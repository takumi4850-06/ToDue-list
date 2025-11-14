import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in .env file.'
  );
}

if (
  supabaseUrl === 'your_supabase_project_url_here' ||
  supabaseAnonKey === 'your_supabase_anon_key_here' ||
  (!supabaseUrl.startsWith('http://') && !supabaseUrl.startsWith('https://'))
) {
  throw new Error(
    'Invalid Supabase configuration. Please update .env file with actual values from Supabase dashboard.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
