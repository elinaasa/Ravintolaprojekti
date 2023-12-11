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
