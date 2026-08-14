import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function Telehealth(){
  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">Telehealth</h2>
      <Card>
        <div className="text-sm">Video visits are available for eligible appointments.</div>
        <div className="mt-4"><Button onClick={()=> alert('Start mock video (demo)')}>Start Video Visit</Button></div>
      </Card>
    </PatientLayout>
  )
}
