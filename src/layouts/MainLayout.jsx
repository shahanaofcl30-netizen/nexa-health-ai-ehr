import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function MainLayout({ children }){
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
