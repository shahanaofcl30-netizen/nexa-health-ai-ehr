import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { login } from '../../services/authService'
import { useAuth } from '../../context/AuthContext'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const { setAuthUser } = useAuth()
  const nav = useNavigate()

  async function handle(e){
    e.preventDefault()
    setError('')
    try{
      const user = await login({email,password})
      setAuthUser(user)
      if(user.role==='patient') nav('/patient')
      else if(user.role==='doctor') nav('/doctor')
      else if(user.role==='admin') nav('/admin')
      else nav('/')
    }catch(err){ setError(err.message) }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
      <form onSubmit={handle} className="space-y-3">
        <Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-nh-blue-600">Forgot password?</a>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  )
}
