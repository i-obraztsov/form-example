import {useState} from 'react';
import type {HTMLInputTypeAttribute, ChangeEvent, RefObject, InputHTMLAttributes} from 'react';

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement | null>;
}

type Input = InputProps & InputHTMLAttributes<HTMLInputElement>

export function Input({type, ref, name, id, onChange, ...rest}: Input) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setValue(event.target.value)
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      id={id}
      ref={ref}
      {...rest}
    />
  )
}
