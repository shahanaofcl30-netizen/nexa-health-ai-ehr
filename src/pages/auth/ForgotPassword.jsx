import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function ForgotPassword(){
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  function handle(e){
    e.preventDefault()
    // demo: just show message
    setMessage('If an account exists, a password reset link has been sent (demo).')
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      {message && <div className="text-sm text-green-600 mb-2">{message}</div>}
      <form onSubmit={handle} className="space-y-3">
        <Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="flex justify-end">
          <Button type="submit">Send Reset Link</Button>
        </div>
      </form>
    </div>
  )
}
