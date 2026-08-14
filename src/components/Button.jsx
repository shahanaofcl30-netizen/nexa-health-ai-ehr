import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }){
  const base = 'px-4 py-2 rounded-md font-medium inline-flex items-center gap-2'
  const variants = {
    primary: 'bg-nh-blue-600 text-white hover:bg-nh-blue-700',
    secondary: 'bg-white border text-slate-700 hover:bg-slate-50',
    ghost: 'bg-transparent text-nh-blue-600 hover:underline'
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}
