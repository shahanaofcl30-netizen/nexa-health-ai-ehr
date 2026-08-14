import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'

const MESSAGES = [ {id:1, from:'Dr. Smith', subject:'Follow-up', date:'2026-07-22'} ]

export default function Messages(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <div className="space-y-2">
        {MESSAGES.map(m=> (
          <Card key={m.id}>
            <div className="font-semibold">{m.subject}</div>
            <div className="text-sm text-slate-600">From {m.from} • {m.date}</div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
