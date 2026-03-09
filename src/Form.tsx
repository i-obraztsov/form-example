import {type ReactNode, type SubmitEvent} from "react";

interface FormProps {
  action?: string;
  method?: string;
  onSubmit?: (event: SubmitEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export function Form({
                       action,
                       method,
                       onSubmit,
                       children,
                     }: FormProps) {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}