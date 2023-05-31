import { ReactNode } from "react";

// -----------------------------------------------------------------------------

interface IProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  [ksy: string]: any;
}

// -----------------------------------------------------------------------------

export default function PageTitle({ className = '', children, title, ...others }: IProps) {
  return (
    <header className={`bg_page_title py-10 md:py-28 ${className}`} {...others}>
      {title && (
        <h1 className="text-3xl md:text-5xl text-center font-extrabold capitalize text-white">{title}</h1>
      )}
      {children}
    </header>
  )
}