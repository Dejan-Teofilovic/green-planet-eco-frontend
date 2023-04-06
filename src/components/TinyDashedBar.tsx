import React from "react"

// -----------------------------------------------------------------------

interface IProps {
  className?: string
}

// -----------------------------------------------------------------------

export default function TinyDashedBar({ className = '' }: IProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="h-1 bg-primary w-10"></div>
      <div className="h-1 bg-primary w-3"></div>
      <div className="h-1 bg-primary w-2"></div>
    </div>
  )
}