// Demo auth service using localStorage. Replaceable with Supabase later.

const STORAGE_KEY = 'nexa_auth_user'

export function saveUser(user){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function clearUser(){
  localStorage.removeItem(STORAGE_KEY)
}

export function getUser(){
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : null
}

export async function register({email,password,role,name}){
  // simple validation
  if(!email || !password) throw new Error('Email and password are required')
  if(role==='admin') throw new Error('Admin registration is not allowed')
  const existing = getUser()
  if(existing && existing.email === email) throw new Error('User already exists (demo)')
  const user = {email, name, role}
  saveUser(user)
  return user
}

export async function login({email,password}){
  // demo: accept any password if email matches stored user
  const user = getUser()
  if(!user || user.email !== email) throw new Error('Invalid credentials (demo)')
  return user
}

export async function logout(){
  clearUser()
}
