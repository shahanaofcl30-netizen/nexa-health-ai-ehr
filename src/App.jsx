import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Settings from './pages/Settings'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
