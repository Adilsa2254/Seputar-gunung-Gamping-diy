// Sample login credentials for demonstration
const validUsername = "player";
const validPassword = "game123";

// Get the form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Handle form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get user input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match the valid credentials
  if (username === validUsername && password === validPassword) {
    // Store username in session storage
    sessionStorage.setItem('username', username);
    // Redirect to the game page
    window.location.href = "game.html"; // Game page
  } else {
    // Show an error message if login is incorrect
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.style.display = "block";
  }
});