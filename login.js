document.getElementById("loginform").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("Username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message); // Show response message
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login');
  }
});
