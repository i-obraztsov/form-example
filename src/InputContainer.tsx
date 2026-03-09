import React from "react";
interface InputContainerProps {
  children: React.ReactNode
}

export function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="row">
      {children}
    </div>
  )
}