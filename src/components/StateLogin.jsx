import {useState} from "react";
import Input from "./Input.jsx";

import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailChange,
        hasError: hasEmailError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputBlur: handlePasswordBlur,
        handleInputChange: handlePasswordChange,
        hasError: hasPasswordError,
    } = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));

    function handleSubmit(event) {
        event.preventDefault();

        if(hasEmailError && hasPasswordError) {
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id='email'
                    type="email"
                    name="email"
                    onChange={handleEmailChange}
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    error={hasEmailError && 'Email is invalid.'}
                />

                <Input
                    label="Password"
                    id='password'
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    onBlur={handlePasswordBlur}
                    error={hasPasswordError && 'Password is invalid.'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
