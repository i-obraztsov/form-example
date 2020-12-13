export function validatePassword(passwordInput) {
    let message = '';
    if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. ';
    }
    if (!/.*[A-Z].*/.test(passwordInput.value)) {
        message += 'At least one uppercase letter. ';
    }
    if (!/.*[a-z].*/.test(passwordInput.value)) {
        message += 'At least one lowercase letter.';
    }
    passwordInput.setCustomValidity(message);
}
