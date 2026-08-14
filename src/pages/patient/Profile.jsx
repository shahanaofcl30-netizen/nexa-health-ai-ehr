import React, { useState } from 'react'
import PatientLayout from '../../layouts/PatientLayout'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { DEMO_PATIENTS } from '../../data/demoPatients'

export default function Profile(){
  const p = DEMO_PATIENTS[0]
  const [form, setForm] = useState({name:p.name, email:p.email || '', bloodGroup:'O+', allergies:'None', emergencyContact:'', history:''})

  function update(field, value){ setForm({...form, [field]: value}) }

  return (
    <PatientLayout>
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Full name" value={form.name} onChange={e=>update('name', e.target.value)} />
          <Input label="Email" value={form.email} onChange={e=>update('email', e.target.value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Blood group" value={form.bloodGroup} onChange={e=>update('bloodGroup', e.target.value)} />
          <Input label="Allergies" value={form.allergies} onChange={e=>update('allergies', e.target.value)} />
        </div>
        <Input label="Emergency contact" value={form.emergencyContact} onChange={e=>update('emergencyContact', e.target.value)} />
        <div>
          <label className="block text-sm mb-1">Medical history</label>
          <textarea className="w-full border rounded-md p-2" rows={4} value={form.history} onChange={e=>update('history', e.target.value)} />
        </div>
        <div className="flex justify-end">
          <Button onClick={()=> alert('Profile saved (demo)')}>Save</Button>
        </div>
      </div>
    </PatientLayout>
  )
}
