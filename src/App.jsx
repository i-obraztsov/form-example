import React, { useReducer, useRef, useState } from "react";
import { Title } from './Title';
import { Form } from './Form';
import { InputContainer } from './InputContainer';
import { Input } from './Input';
import { Label } from './Label';
import { Button } from './Button';

import { validatePassword } from './utils/validatePassword';
import { useFocus } from './utils/useFocus';

const SHOW_PASSWORD = 'show';
const HIDE_PASSWORD = 'hide';

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_PASSWORD: {
            return {
                ...state,
            inputType: action.inputType,
                textBtn: action.textBtn,
                ariaLabelBtn: action.ariaLabelBtn
            }
        }
        case HIDE_PASSWORD: {
            return {
                ...state,
                inputType: action.inputType,
                textBtn: action.textBtn,
                ariaLabelBtn: action.ariaLabelBtn
            }
        }
        default: return state;
    }
}

export const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        inputType: 'password',
        textBtn: 'Show password',
        ariaLabelBtn: 'Show password as plain text',
    });

    const [submitDisable, setSubmitDisable] = useState(false);

    const focusRef = useFocus();
    const passwordRef = useRef(null);

    const togglePassword = (event) => {
        event.preventDefault();
        const { inputType } = state;

        if (inputType === 'password') {
            dispatch({
                 type: SHOW_PASSWORD,
                inputType: 'text',
                textBtn: 'Hide password',
                ariaLabelBtn: 'Hide password',
            });
        } else {
            dispatch({
                type: HIDE_PASSWORD,
                inputType: 'password',
                textBtn: 'Show password',
                ariaLabelBtn: 'Show password as plain text',
            });
        }
    }

    const handleResetValidate = (event) => {
        event.target.setCustomValidity('');
    }

    const handleChange = (event) => {
        event.preventDefault();

        validatePassword(passwordRef.current);
        event.target.reportValidity();

        if (event.target.checkValidity()) {
            alert('Success');
            setSubmitDisable(true);
        }
    }

    return (
        <Form onSubmit={handleChange}>
            <Title title="Sing In" />

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
                    type={state.inputType}
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
                    aria-label={state.ariaLabelBtn}
                >
                    {state.textBtn}
                </Button>
                <span className="password-constraints" id="password-constraints">
                    Eight or more characters, with at least one lowercase and
                    one uppercase letter
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
