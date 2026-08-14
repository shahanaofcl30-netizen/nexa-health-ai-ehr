// small wrapper for fetch/Supabase in future
export async function fetchJson(url, opts={}){
  const res = await fetch(url, opts)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}
