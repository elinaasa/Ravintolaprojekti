const loginText: HTMLElement | null = document.querySelector('.title-text .login');
const loginForm: HTMLFormElement | null = document.querySelector('form.login');
const loginBtn: HTMLLabelElement | null = document.querySelector('label.login');
const signupBtn: HTMLLabelElement | null = document.querySelector('label.signup');
const signupLink: HTMLAnchorElement | null = document.querySelector('form .signup-link a');

if (signupBtn) {
    signupBtn.onclick = () => {
        if (loginForm) {
            loginForm.style.marginLeft = '-50%';
        }
        if (loginText) {
            loginText.style.marginLeft = '-50%';
        }
    };
}

if (loginBtn) {
    loginBtn.onclick = () => {
        if (loginForm) {
            loginForm.style.marginLeft = '0%';
        }
        if (loginText) {
            loginText.style.marginLeft = '0%';
        }
    };
}

if (signupLink) {
    signupLink.onclick = () => {
        if (signupBtn) {
            signupBtn.click();
        }
        return false;
    };
}

document.getElementById('login-icon')?.addEventListener('click', function () {
        const modalWrapper: HTMLElement | null = document.querySelector('.wrapper');
        if (modalWrapper) {
                modalWrapper.style.display = 'grid';
                document.querySelector('main')?.classList.add('blur');
        }
});

document.getElementById('close-login-modal')?.addEventListener('click', function () {
    const modalWrapper: HTMLElement | null = document.querySelector('.wrapper');
    if (modalWrapper) {
        modalWrapper.style.display = 'none';
        document.querySelector('main')?.classList.remove('blur');
    }
});

const overlay: HTMLElement | null = document.getElementById('overlay');
const modalWrapper: HTMLElement | null = document.querySelector('.modal-wrapper');
