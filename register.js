document.querySelector(".signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Collect form values
  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;
  const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

  // Simple validation checks
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    // Create data object to send to the backend
    const formData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    // Send data to the backend using fetch
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'User registered successfully') {
        alert('Registration successful!');
        // Optionally, redirect to login page after successful registration
        window.location.href = 'login.html';
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  }
});
