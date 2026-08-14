import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Settings from './pages/Settings'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import ProtectedRoute from './components/ProtectedRoute'
import { getUser } from './services/authService'
import Landing from './pages/Landing'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <div className="flex">
        <Header />
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<ProtectedRoute allowedRoles={["patient"]}><Patients /></ProtectedRoute>} />
            <Route path="/doctor" element={<ProtectedRoute allowedRoles={["doctor"]}><div>Doctor Dashboard (demo)</div></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}><div>Admin Dashboard (demo)</div></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute allowedRoles={["admin"]}><Settings /></ProtectedRoute>} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot" element={<ForgotPassword />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
