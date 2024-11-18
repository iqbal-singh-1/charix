// JavaScript for Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting before validation

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate fields
    if (!email || !password) {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Simulate successful login (replace this with real login logic)
    if (email === 'test@charix.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to the dashboard or home page
        // window.location.href = 'dashboard.html'; // Uncomment for redirect
    } else {
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
});
