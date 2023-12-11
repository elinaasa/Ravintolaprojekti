document
  .getElementById('register-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const registerData = {username, email, password};

    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const userData = await response.json();
        const token = userData.token;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData.user));

        window.location.href = 'http://127.0.0.1:5501/admin.html';
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  });