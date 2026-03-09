import type {ButtonHTMLAttributes, ReactNode, SyntheticEvent} from "react";

interface ButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
}

export function Button({
                         type,
                         className,
                         onClick,
                         children,
                         ...rest
                       }: ButtonProps) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

