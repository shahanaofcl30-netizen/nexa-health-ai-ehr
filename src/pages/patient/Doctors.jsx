import React, { useState } from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { DEMO_DOCTORS } from '../../data/demoDoctors'

export default function Doctors(){
  const [q,setQ] = useState('')
  const [spec,setSpec] = useState('')
  const [availability,setAvailability] = useState('')

  const list = DEMO_DOCTORS.filter(d=> d.name.toLowerCase().includes(q.toLowerCase()) && (spec? d.specialty===spec:true) && (availability? d.available===availability:true))

  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Doctors</h2>
      <div className="flex gap-2 mb-4">
        <input className="border rounded px-3 py-2" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
        <select className="border rounded px-3 py-2" value={spec} onChange={e=>setSpec(e.target.value)}>
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="General">General</option>
        </select>
        <select className="border rounded px-3 py-2" value={availability} onChange={e=>setAvailability(e.target.value)}>
          <option value="">Any</option>
          <option value="yes">Available</option>
          <option value="no">Busy</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map(d=> (
          <Card key={d.id}>
            <div className="font-semibold">{d.name}</div>
            <div className="text-sm text-slate-600">{d.specialty}</div>
            <div className="mt-2 flex justify-end"><Button onClick={()=> alert('Book appointment (demo)')}>Book Appointment</Button></div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
