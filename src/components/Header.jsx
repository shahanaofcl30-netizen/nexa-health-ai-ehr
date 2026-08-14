import React from 'react'
import { Search, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="menu"><Menu className="w-5 h-5"/></button>
          <Link to="/landing" className="text-lg font-semibold">Nexa Health AI</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="w-4 h-4 text-slate-500 mr-2" />
            <input className="bg-transparent outline-none text-sm" placeholder="Search patients, notes..." />
          </div>
          <div className="text-sm text-slate-600">Demo User</div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/landing" className="block">Home</Link>
            <Link to="#features" className="block">Features</Link>
            <Link to="#solutions" className="block">Solutions</Link>
            <Link to="#ai" className="block">AI Features</Link>
            <Link to="#about" className="block">About</Link>
            <Link to="#contact" className="block">Contact</Link>
            <Link to="/" className="block">Login</Link>
            <Link to="/" className="block font-semibold">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  )
}
