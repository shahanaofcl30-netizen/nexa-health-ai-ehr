import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'

export default function AI(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
      <Card>
        <div className="text-sm">Use AI to summarize records, explain conditions, and provide follow-up guidance (demo).</div>
      </Card>
    </PatientLayout>
  )
}
