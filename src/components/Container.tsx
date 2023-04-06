import React, { ReactNode } from "react";

// -----------------------------------------------------------------

interface IProps {
  className?: string;
  children?: ReactNode;
  [ksy: string]: any;
}

// -----------------------------------------------------------------

export default function Container({ className = '', children, ...others }: IProps) {
  return (
    <div className={`container max-w-6xl mx-auto px-4 lg:px-0 ${className}`} {...others}>
      {children}
    </div>
  )
}