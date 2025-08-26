//Elements
const form = document.getElementById('signup-form');
const emailInput = form.querySelector('input[type="email"]');
const successMessage = document.querySelector('.mobile-success-message');
const closeButton = successMessage.querySelector(".btn-close");
const errorMessageText = document.querySelector('.error-message');

// Event listeners
closeButton.addEventListener(
    'click',
    () => {
        successMessage.classList.add('hidden');
    }
);

form.addEventListener(
    'submit',
    (e) => {
        e.preventDefault(); // Prevent form submission
        
        // Get email value and trim whitespace
        const email = emailInput.value.trim();

        // Run validation
        const validationResult = validateEmail(email);

        if (validationResult === true){
            // Show success message
            successMessage.classList.remove('hidden');
        }
        else{
            // Show error message
            errorMessageText.classList.remove('hidden');
        }

        const target = successMessage.querySelector('strong');
        target.textContent = email;

        // Clear input field
        if (validationResult === true){
            emailInput.value = '';
        }
        if (validationResult === true){
            errorMessageText.textContent = '';
            errorMessageText.classList.add('hidden');
        }
    }

)

// Functions
function validateEmail(email) {
   // Check emptiness
    if (email === ''){
        errorMessageText.textContent = 'Email is required';
        errorMessageText.classList.remove('hidden');
        return 'Email is required';
    }


    // Check email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail.test(email)) {
        errorMessageText.textContent = 'valid email address is required.';

        return '';
    }

    return true;

}

