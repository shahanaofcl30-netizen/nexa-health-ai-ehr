import React from 'react'
import Card from '../components/Card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const sampleData = [
  { name: 'Jan', visits: 400 },
  { name: 'Feb', visits: 600 },
  { name: 'Mar', visits: 700 },
  { name: 'Apr', visits: 500 },
]

export default function Dashboard(){
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Card title="Active Patients"><div className="text-2xl font-bold">1,234</div></Card>
        <Card title="Appointments Today"><div className="text-2xl font-bold">42</div></Card>
        <Card title="Avg. Wait Time"><div className="text-2xl font-bold">12m</div></Card>
      </div>

      <Card title="Visits Over Time">
        <div style={{height:280}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
