import React from 'react'
import Card from '../components/Card'

const DEMO_PATIENTS = [
  { id: 'P-001', name: 'Alice Johnson', age: 34, lastVisit: '2026-07-20' },
  { id: 'P-002', name: 'Bob Smith', age: 58, lastVisit: '2026-07-18' },
]

export default function Patients(){
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Patients</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">New Patient</button>
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead className="text-left text-slate-600">
            <tr><th className="pb-2">ID</th><th className="pb-2">Name</th><th className="pb-2">Age</th><th className="pb-2">Last Visit</th></tr>
          </thead>
          <tbody>
            {DEMO_PATIENTS.map(p=> (
              <tr key={p.id} className="border-t"><td className="py-2">{p.id}</td><td>{p.name}</td><td>{p.age}</td><td>{p.lastVisit}</td></tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
