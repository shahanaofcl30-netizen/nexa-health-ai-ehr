import React from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Card from '../../components/Card'
import { DEMO_PATIENTS } from '../../data/demoPatients'

export default function PatientDashboard(){
  const patient = DEMO_PATIENTS[0]
  return (
    <PatientLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Welcome back, {patient.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Upcoming Appointment"><div className="text-sm">Dr. Smith — 2026-08-20 10:00 AM</div></Card>
          <Card title="Active Prescriptions"><div className="text-sm">Lisinopril, Vitamin D</div></Card>
          <Card title="Lab Report Status"><div className="text-sm">2 Reports Pending</div></Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Pending Bills"><div className="text-sm">$150 - Due 2026-08-30</div></Card>
          <Card title="Recent Activity"><div className="text-sm">Visited Dr. Smith — 2026-07-01</div></Card>
        </div>
      </div>
    </PatientLayout>
  )
}
