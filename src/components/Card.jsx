import React from 'react'

export default function Card({ title, children }){
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
