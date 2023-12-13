document
    .getElementById('register-form')!
    .addEventListener('submit', async function (event: Event) {
    event.preventDefault();

    const username: string = (document.getElementById('register-username') as HTMLInputElement).value;
    const email: string = (document.getElementById('register-email') as HTMLInputElement).value;
    const password: string = (document.getElementById('register-password') as HTMLInputElement).value;

    const registerData: { username: string, email: string, password: string } = { username, email, password };

    try {
      const response: Response = await fetch(
        'https://ucad.northeurope.cloudapp.azure.com/api/api/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        }
      );

      if (response.ok) {
        const userData: { token: string, user: object } = await response.json();
        const token: string = userData.token;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData.user));

        window.location.href =
          'https://ucad.northeurope.cloudapp.azure.com/admin.html';
      } else {
        const errorData: { message: string } = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  });
