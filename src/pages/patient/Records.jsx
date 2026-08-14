import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { DEMO_RECORDS } from '../../data/demoRecords'

export default function Records(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
      <div className="space-y-3">
        {DEMO_RECORDS.map(r=> (
          <Card key={r.id} title={`${r.type} • ${r.date}`}>
            <div className="text-sm text-slate-700">{r.summary}</div>
            <div className="mt-2 flex justify-end">
              <Button variant="secondary" onClick={()=> alert('AI Summary (demo)')}>AI Summary</Button>
            </div>
          </Card>
        ))}
      </div>
    </PatientLayout>
  )
}
