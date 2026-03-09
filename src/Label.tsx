import React from "react";

interface LabelProps {
  forId?: string;
  children: React.ReactNode;
}

export function Label({ forId = '', children}: LabelProps) {
  return (
    <label htmlFor={forId}>
      { children }
    </label>
  )
}
