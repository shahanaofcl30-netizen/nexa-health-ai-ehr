import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { register } from '../../services/authService'
import { useAuth } from '../../context/AuthContext'

export default function Register(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [role,setRole]=useState('patient')
  const [error,setError]=useState('')
  const { setAuthUser } = useAuth()
  const nav = useNavigate()

  async function handle(e){
    e.preventDefault()
    setError('')
    try{
      const user = await register({email,password,role,name})
      setAuthUser(user)
      if(user.role==='patient') nav('/patient')
      else if(user.role==='doctor') nav('/doctor')
    }catch(err){ setError(err.message) }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
      <form onSubmit={handle} className="space-y-3">
        <Input label="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div>
          <label className="block text-sm mb-1">Role</label>
          <select className="w-full border rounded-md px-3 py-2" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  )
}
