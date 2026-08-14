import React from 'react'
import PatientSidebar from '../components/PatientSidebar'

export default function PatientLayout({children}){
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 flex">
      <PatientSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
