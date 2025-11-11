// Lightweight Supabase REST client without external dependencies
// Configure these in your .env.local (Vite):
// VITE_SUPABASE_URL=https://<PROJECT>.supabase.co
// VITE_SUPABASE_ANON_KEY=<YOUR_ANON_KEY>

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

// Fetch all products from the 'products' table
export async function getProducts() {
  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error('Supabase environment variables are not configured') };
  }

  const url = `${SUPABASE_URL}/rest/v1/products?select=*`;
  const headers = {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      return { data: null, error: new Error(`Supabase REST error: ${res.status} ${res.statusText}`) };
    }
    const data = await res.json();
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}