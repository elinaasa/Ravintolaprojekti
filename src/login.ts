const loginText: HTMLElement | null = document.querySelector('.title-text .login');
const loginForm: HTMLFormElement | null = document.querySelector('form.login');
const loginBtn: HTMLLabelElement | null = document.querySelector('label.login');
const signupBtn: HTMLLabelElement | null = document.querySelector('label.signup');
const signupLink: HTMLAnchorElement | null = document.querySelector('form .signup-link a');

signupBtn?.onclick = () => {
  loginForm?.style.marginLeft = '-50%';
  loginText?.style.marginLeft = '-50%';
};

loginBtn?.onclick = () => {
  loginForm?.style.marginLeft = '0%';
  loginText?.style.marginLeft = '0%';
};

signupLink?.onclick = () => {
  signupBtn?.click();
  return false;
};

document.getElementById('login-icon')?.addEventListener('click', function () {
  const modalWrapper: HTMLElement | null = document.querySelector('.wrapper');
  modalWrapper?.style.display = 'grid';
  document.querySelector('main')?.classList.add('blur');
});

document
  .getElementById('close-login-modal')
  ?.addEventListener('click', function () {
    const modalWrapper: HTMLElement | null = document.querySelector('.wrapper');
    modalWrapper?.style.display = 'none';
    document.querySelector('main')?.classList.remove('blur');
  });

const overlay: HTMLElement | null = document.getElementById('overlay');
const modalWrapper: HTMLElement | null = document.querySelector('.modal-wrapper');

document
  .querySelector('#login-form')
  ?.addEventListener('submit', async function (event) {
    event.preventDefault();
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    const loginData: { username: string, password: string } = { username, password };
    const response: Response = await fetch(
      'https://ucad.northeurope.cloudapp.azure.com/api/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      }
    );
    const data: any = await response.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href =
        'https://ucad.northeurope.cloudapp.azure.com/admin.html';
    } else {
      alert('Login failed');
    }
  });
