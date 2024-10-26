document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    validateForm();
});

function validateForm() {
    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName');
    if (!validateAlphanumeric(firstName.value, 3, 16)) {
        showError(firstName, 'First name must be alphanumeric and contain 3 - 16 characters');
        isValid = false;
    } else {
        clearError(firstName);
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName');
    if (!validateAlphanumeric(lastName.value, 3, 16)) {
        showError(lastName, 'Last name must be alphanumeric and contain 3 - 16 characters');
        isValid = false;
    } else {
        clearError(lastName);
    }

    // Email Validation
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        showError(email, 'Email must be a valid address, e.g. example@example.com');
        isValid = false;
    } else {
        clearError(email);
    }

    // Password Validation
    const password = document.getElementById('password');
    if (!validatePassword(password.value, 6, 20)) {
        showError(password, 'Password must be alphanumeric (@, _, and - are also allowed) and between 6 - 20 characters');
        isValid = false;
    } else {
        clearError(password);
    }

    // Telephone Validation
    const telephone = document.getElementById('telephone');
    if (!validateTelephone(telephone.value)) {
        showError(telephone, 'A valid telephone number (11 digits or (123) 456-7890)');
        isValid = false;
    } else {
        clearError(telephone);
    }

    // Bio Validation
    const bio = document.getElementById('bio');
    if (!validateBio(bio.value, 8, 50)) {
        showError(bio, 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters');
        isValid = false;
    } else {
        clearError(bio);
    }

    if (isValid) {
        alert('Form Submitted Successfully!');
    }
}

function validateAlphanumeric(input, minLength, maxLength) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input) && input.length >= minLength && input.length <= maxLength;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePassword(password, minLength, maxLength) {
    const regex = /^[a-zA-Z0-9@_\-]+$/;
    return regex.test(password) && password.length >= minLength && password.length <= maxLength;
}

function validateTelephone(telephone) {
    const regex = /^(\d{11}|(\(\d{3}\) ?\d{3}-\d{4}))$/;
    return regex.test(telephone);
}

function validateBio(bio, minLength, maxLength) {
    const regex = /^[a-z_\-]+$/;
    return regex.test(bio) && bio.length >= minLength && bio.length <= maxLength;
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error');
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('error');
}
