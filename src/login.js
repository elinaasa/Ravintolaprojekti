const loginText = document.querySelector('.title-text .login');
const loginForm = document.querySelector('form.login');
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('form .signup-link a');

signupBtn.onclick = () => {
  loginForm.style.marginLeft = '-50%';
  loginText.style.marginLeft = '-50%';
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = '0%';
  loginText.style.marginLeft = '0%';
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

document.getElementById('login-icon').addEventListener('click', function () {
  const modalWrapper = document.querySelector('.wrapper');
  modalWrapper.style.display = 'grid';
  document.querySelector('main').classList.add('blur');
});

document
  .getElementById('close-login-modal')
  .addEventListener('click', function () {
    const modalWrapper = document.querySelector('.wrapper');
    modalWrapper.style.display = 'none';
    document.querySelector('main').classList.remove('blur');
  });

const overlay = document.getElementById('overlay');
const modalWrapper = document.querySelector('.modal-wrapper');

document
  .querySelector('#login-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginData = {username, password};
    const response = await fetch(
      'https://ucad.northeurope.cloudapp.azure.com//api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href =
        'https://ucad.northeurope.cloudapp.azure.com//admin.html';
    } else {
      alert('Login failed');
    }
  });

// REGISTRATION
document
  .querySelector('#signup-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const registrationData = {username: newUsername, password: newPassword};

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful. Please login.');
        loginBtn.click();
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  });
