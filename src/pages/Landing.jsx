import React from 'react'
import { Cloud, Users, Calendar, ShieldCheck, Laptop, FileText, CreditCard, MessageCircle, Cpu } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'

const Stat = ({label, value})=> (
  <div className="p-4 text-center">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
)

const Feature = ({icon:Icon, title, desc})=> (
  <Card>
    <div className="flex items-start gap-3">
      <Icon className="w-6 h-6 text-nh-blue-600" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  </Card>
)

export default function Landing(){
  return (
    <div>
      <section className="bg-gradient-to-r from-nh-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Nexa Health AI</h1>
            <p className="mt-4 text-lg text-slate-700">Intelligent Care. Connected Health. Better Outcomes.</p>
            <div className="mt-6 flex gap-3">
              <Button onClick={()=> alert('Demo: Get Started')} >Get Started</Button>
              <Button variant="secondary" onClick={()=> alert('Demo: Book Appointment')}>Book Appointment</Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2 bg-white rounded-md p-4 shadow-sm">
              <Stat label="Patients" value="1,234" />
              <Stat label="Doctors" value="243" />
              <Stat label="Appointments" value="4,321" />
              <Stat label="Secure Platform" value="HIPAA-ready" />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-md shadow p-4">
              <div className="h-64 bg-gradient-to-b from-nh-blue-100 to-white rounded-md flex items-center justify-center"> 
                <div className="text-nh-blue-700 font-semibold">Dashboard Visual (demo)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature icon={Users} title="Patient Management" desc="Centralized patient records and longitudinal history." />
          <Feature icon={Calendar} title="Appointments" desc="Schedule and manage appointments with reminders." />
          <Feature icon={FileText} title="Clinical Notes" desc="Structured note editor and AI-assisted summaries." />
          <Feature icon={Laptop} title="Telehealth" desc="Secure video visits integrated into workflows." />
          <Feature icon={Cloud} title="E-Prescriptions" desc="Fast, compliant electronic prescribing." />
          <Feature icon={Cpu} title="AI Assistance" desc="Clinical decision support and summarization." />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card><div className="text-center">Register<br/><span className="text-sm text-slate-600">Patient signs up</span></div></Card>
            <Card><div className="text-center">Book<br/><span className="text-sm text-slate-600">Schedule an appointment</span></div></Card>
            <Card><div className="text-center">Visit<br/><span className="text-sm text-slate-600">Telehealth or in-person</span></div></Card>
            <Card><div className="text-center">Follow-up<br/><span className="text-sm text-slate-600">Care plan and summary</span></div></Card>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">AI Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="font-semibold">Clinical Note Assistant</div>
            <div className="text-sm text-slate-600">Draft notes faster with AI suggestions and templates.</div>
          </Card>
          <Card>
            <div className="font-semibold">Medical Record Summary</div>
            <div className="text-sm text-slate-600">Condensed summaries of long records for quick review.</div>
          </Card>
          <Card>
            <div className="font-semibold">Health Information Assistant</div>
            <div className="text-sm text-slate-600">Patient-facing explanations and follow-up instructions.</div>
          </Card>
        </div>
      </section>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">© {new Date().getFullYear()} Nexa Health AI. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm text-slate-600">Privacy</a>
            <a className="text-sm text-slate-600">Terms</a>
            <a className="text-sm text-slate-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
