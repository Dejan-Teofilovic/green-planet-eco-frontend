import React from "react"

// -----------------------------------------------------------------------

interface IProps {
  className?: string
}

// -----------------------------------------------------------------------

export default function TinyDashedBar({ className = '' }: IProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="h-0.5 md:h-1 bg-primary w-7"></div>
      <div className="h-0.5 md:h-1 bg-primary w-2"></div>
      <div className="h-0.5 md:h-1 bg-primary w-1"></div>
    </div>
  )
}