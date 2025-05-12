import React from 'react'

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-grow border-t-1 border-t-cyan-200 min-h-lvh h-auto">
      <div className="block flex-grow justify-between col-span-9">
        {children}
      </div>
    </div>
  )
}
