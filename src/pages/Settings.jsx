import React from 'react'
import Card from '../components/Card'

export default function Settings(){
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Settings</h2>
      <Card title="Supabase (demo)">
        <p className="text-sm text-slate-600">Supabase client is configured to read from environment variables. No secrets are committed.</p>
      </Card>
    </div>
  )
}
