import React from 'react'
import { Home, User, Stethoscope, Calendar, FileText, Flask, Capsule, CreditCard, MessageCircle, Video, Cpu, Bell, Settings, LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../services/authService'
import { useAuth } from '../context/AuthContext'

const Item = ({to, icon:Icon, children})=> (
  <NavLink to={to} className={({isActive})=>`flex items-center gap-3 px-4 py-2 rounded-md ${isActive? 'bg-white shadow':''}`}>
    <Icon className="w-4 h-4 text-slate-600" />
    <span className="text-sm text-slate-700">{children}</span>
  </NavLink>
)

export default function PatientSidebar(){
  const { setAuthUser } = useAuth()
  const nav = useNavigate()
  async function handleLogout(){
    await logout()
    setAuthUser(null)
    nav('/')
  }

  return (
    <aside className="w-64 bg-white border-r p-4 min-h-screen">
      <div className="mb-4 font-semibold">Patient</div>
      <nav className="space-y-1">
        <Item to="/patient" icon={Home}>Dashboard</Item>
        <Item to="/patient/profile" icon={User}>My Profile</Item>
        <Item to="/patient/doctors" icon={Stethoscope}>Doctors</Item>
        <Item to="/patient/appointments" icon={Calendar}>Appointments</Item>
        <Item to="/patient/records" icon={FileText}>Medical Records</Item>
        <Item to="/patient/labs" icon={Flask}>Lab Reports</Item>
        <Item to="/patient/prescriptions" icon={Capsule}>Prescriptions</Item>
        <Item to="/patient/billing" icon={CreditCard}>Billing</Item>
        <Item to="/patient/messages" icon={MessageCircle}>Messages</Item>
        <Item to="/patient/telehealth" icon={Video}>Telehealth</Item>
        <Item to="/patient/ai" icon={Cpu}>AI Assistant</Item>
        <Item to="/patient/notifications" icon={Bell}>Notifications</Item>
        <Item to="/settings" icon={Settings}>Settings</Item>
        <button onClick={handleLogout} className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-md text-sm text-slate-700 hover:bg-gray-50">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </nav>
    </aside>
  )
}
