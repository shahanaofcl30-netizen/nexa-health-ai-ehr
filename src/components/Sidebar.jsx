import React from 'react'
import { Home, Users, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, icon: Icon, children }) => (
  <NavLink to={to} className={({isActive})=>`flex items-center gap-3 px-4 py-2 rounded-md ${isActive? 'bg-white shadow':''}`}>
    <Icon className="w-4 h-4 text-slate-600" />
    <span className="text-sm text-slate-700">{children}</span>
  </NavLink>
)

export default function Sidebar(){
  return (
    <aside className="w-60 bg-gray-100 p-4 min-h-[calc(100vh-64px)]">
      <nav className="space-y-2">
        <NavItem to="/" icon={Home}>Dashboard</NavItem>
        <NavItem to="/patients" icon={Users}>Patients</NavItem>
        <NavItem to="/doctor" icon={Users}>Doctor</NavItem>
        <NavItem to="/admin" icon={Settings}>Admin</NavItem>
        <NavItem to="/settings" icon={Settings}>Settings</NavItem>
      </nav>
    </aside>
  )
}
