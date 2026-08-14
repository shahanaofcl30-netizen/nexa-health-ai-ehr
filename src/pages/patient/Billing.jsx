import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'

const DEMO_BILLS = [ { id:1, desc:'Consultation', amount:150, due:'2026-08-30' } ]

export default function Billing(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Billing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DEMO_BILLS.map(b=> (
          <Card key={b.id}>
            <div className="font-semibold">{b.desc}</div>
            <div className="text-sm text-slate-600">${b.amount} • Due {b.due}</div>
            <div className="mt-2 flex justify-end"><Button onClick={()=> alert('Pay (demo)')}>Pay</Button></div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
