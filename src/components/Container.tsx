import React, { ReactNode } from "react";

// -----------------------------------------------------------------

interface IProps {
  className?: string;
  children?: ReactNode
}

// -----------------------------------------------------------------

export default function Container({ className, children }: IProps) {
  return (
    <div className={`container max-w-6xl mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  )
}