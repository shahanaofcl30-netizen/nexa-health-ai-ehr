import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'

const DEMO_LABS = [
  { id:1, name:'CBC', date:'2026-07-20', status:'Ready' },
  { id:2, name:'Lipid Panel', date:'2026-07-22', status:'Pending' }
]

export default function Labs(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Lab Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DEMO_LABS.map(l=> (
          <Card key={l.id}>
            <div className="font-semibold">{l.name}</div>
            <div className="text-sm text-slate-600">{l.date} • {l.status}</div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
