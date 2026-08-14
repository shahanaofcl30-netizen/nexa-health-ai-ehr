import React from 'react'

export default function Badge({ children, color='blue' }){
  const colors = {
    blue: 'bg-nh-blue-100 text-nh-blue-800',
    teal: 'bg-nh-teal-100 text-nh-teal-800',
    gray: 'bg-gray-100 text-slate-700'
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded ${colors[color] || colors.gray}`}>{children}</span>
  )
}
