document.getElementById("signup-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password === confirmPassword) {
      alert(`Welcome, ${name}! You've successfully signed up.`);
      // Add logic to save user info (e.g., store in local storage or backend)
    } else {
      alert("Passwords do not match. Please try again.");
    }
  });
  
  document.getElementById("login-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // For demonstration, we'll check if the email contains "example.com" and any non-empty password
    if (email.includes("example.com") && password !== "") {
      alert("Login successful!");
      // Redirect to the homepage or dashboard (if you have one)
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  
  