document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate login validation
        if (username && password) {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Please enter a valid username and password');
        }
    });
});
