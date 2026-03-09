export function validatePassword(passwordInput: HTMLInputElement) {
    let message = '';
    if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. \n';
    }
    if (!/.*[A-Z].*/.test(passwordInput.value)) {
        message += 'At least one uppercase letter. \n';
    }
    if (!/.*[a-z].*/.test(passwordInput.value)) {
        message += 'At least one lowercase letter.\n';
    }
    passwordInput.setCustomValidity(message);
}
