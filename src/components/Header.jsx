import React from 'react'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Nexa Health AI</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="w-4 h-4 text-slate-500 mr-2" />
            <input className="bg-transparent outline-none text-sm" placeholder="Search patients, notes..." />
          </div>
          <div className="text-sm text-slate-600">Demo User</div>
        </div>
      </div>
    </header>
  )
}
