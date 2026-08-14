export function formatDate(d){
  const dt = new Date(d)
  return dt.toLocaleDateString()
}
