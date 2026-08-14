import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'

const DEMO_RX = [
  { id:1, name:'Lisinopril', dose:'10mg', refills:2 },
  { id:2, name:'Vitamin D', dose:'1000 IU', refills:0 }
]

export default function Prescriptions(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Prescriptions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DEMO_RX.map(r=> (
          <Card key={r.id}>
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-slate-600">{r.dose} • Refills: {r.refills}</div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
