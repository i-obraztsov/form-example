const $passwordInput = document.getElementById('password');
const $togglePassword = document.querySelector('.toggle-password');
const $form = document.querySelector('form');
const $submitBtn = document.querySelector('button[type=submit]');

$form.addEventListener('submit', handleFormSubmission);
$togglePassword.addEventListener('click', togglePassword);
$passwordInput.addEventListener('input', resetCustomValidity);

function togglePassword() {
    if ($passwordInput.type === 'password') {
        $passwordInput.type = 'text';
        $togglePassword.innerText = 'Hide password';
        $togglePassword.setAttribute('aria-label', 'Hide password');
    } else {
        $passwordInput.type = 'password';
        $togglePassword.innerText = 'Show password';
        $togglePassword.setAttribute(
            'aria-label',
            'Show password as plain text.'
        );
    }
}

function resetCustomValidity() {
    $passwordInput.setCustomValidity('');
}

function validatePassword() {
    let message = '';
    if (!/.{8,}/.test($passwordInput.value)) {
        message = 'At least eight characters. ';
    }
    if (!/.*[A-Z].*/.test($passwordInput.value)) {
        message += 'At least one uppercase letter. ';
    }
    if (!/.*[a-z].*/.test($passwordInput.value)) {
        message += 'At least one lowercase letter.';
    }
    $passwordInput.setCustomValidity(message);
}

function handleFormSubmission(event) {
    event.preventDefault();
    validatePassword();
    $form.reportValidity();
    if ($form.checkValidity()) {
        console.log('Success');
        $submitBtn.disabled = 'true';
    }
}
