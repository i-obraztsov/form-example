import React, {useRef, useState} from "react";

import {Title} from './Title';
import {Form} from './Form';
import {InputContainer} from './InputContainer';
import {Input} from './Input';
import {Label} from './Label';
import {Button} from './Button';

import {validatePassword} from './utils/validatePassword';
import {useFocus} from './utils/useFocus';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(false);

  const focusRef = useFocus<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleResetValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
  }

  const handleChange = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const passwordInput = passwordRef.current;
    if (passwordInput) {
      validatePassword(passwordInput);
    }

    event.target.reportValidity();

    if (event.target.checkValidity()) {
      alert('Success');
      setSubmitDisable(true);
    }
  }

  const inputType = showPassword ? "text" : "password";
  const buttonText = showPassword ? "Hide password" : "Show password";
  const ariaLabel = showPassword
    ? "Hide password"
    : "Show password as plain text";

  return (
    <Form onSubmit={handleChange}>
      <Title title="Sing In"/>

      <InputContainer>
        <Label forId="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          ref={focusRef}
          required
        />
      </InputContainer>

      <InputContainer>
        <Label forId="password">Password</Label>
        <Input
          type={inputType}
          id="password"
          name="password"
          aria-describedby="password-constraints"
          autoComplete="current-password"
          onChange={handleResetValidate}
          ref={passwordRef}
          required
        />
        <Button
          className="toggle-password"
          onClick={togglePassword}
          type="button"
          aria-label={ariaLabel}
          aria-pressed={showPassword}
        >
          {buttonText}
        </Button>
        <span className="password-constraints" id="password-constraints">
          Eight or more characters, with at least one lowercase and one uppercase letter
        </span>
      </InputContainer>

      <Button
        className="send-form"
        type="submit"
        disabled={submitDisable}
      >
        Sign in
      </Button>
    </Form>
  );
}

export default App
