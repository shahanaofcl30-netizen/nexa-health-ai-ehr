import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'

const DEMO_APPTS = [
  { id:1, doctor:'Dr. Smith', date:'2026-08-20 10:00', type:'Video', status:'Confirmed' },
  { id:2, doctor:'Dr. Allen', date:'2026-09-01 14:00', type:'In-person', status:'Pending' }
]

export default function Appointments(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DEMO_APPTS.map(a=> (
          <Card key={a.id}>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{a.doctor}</div>
                <div className="text-sm text-slate-600">{a.date} • {a.type}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-sm text-slate-600">{a.status}</div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={()=> alert('Reschedule (demo)')}>Reschedule</Button>
                  <Button onClick={()=> alert('Cancel (demo)')}>Cancel</Button>
                  {a.type==='Video' && <Button variant="ghost" onClick={()=> alert('Join Telehealth (demo)')}>Join</Button>}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
