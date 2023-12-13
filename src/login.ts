const loginText: HTMLElement | null = document.querySelector(".title-text .login");
const loginForm: HTMLFormElement | null = document.querySelector("form.login");
const loginBtn: HTMLLabelElement | null = document.querySelector("label.login");
const signupBtn: HTMLLabelElement | null = document.querySelector("label.signup");
const signupLink: HTMLAnchorElement | null = document.querySelector("form .signup-link a");

if (signupBtn) {
  signupBtn.onclick = () => {
    if (loginForm && loginText) {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    }
  };
}

if (loginBtn) {
  loginBtn.onclick = () => {
    if (loginForm && loginText) {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    }
  };
}

if (signupLink) {
  signupLink.onclick = (event) => {
    if (signupBtn) {
      signupBtn.click();
      event.preventDefault();
    }
  };
}

document.getElementById("login-icon")?.addEventListener("click", function () {
  const modalWrapper = document.querySelector<HTMLElement>(".wrapper");
  if (modalWrapper) {
    modalWrapper.style.display = "grid";
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.classList.add("blur");
    }
  }
});

document.getElementById("close-login-modal")?.addEventListener("click", function () {
  const modalWrapper = document.querySelector<HTMLElement>(".wrapper");
  if (modalWrapper) {
    modalWrapper.style.display = "none";
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.classList.remove("blur");
    }
  }
});

const overlay: HTMLElement | null = document.getElementById("overlay");
const modalWrapper: HTMLElement | null = document.querySelector(".modal-wrapper");

if (modalWrapper) {
  modalWrapper.addEventListener("submit", async function (event) {
    event.preventDefault();
    const usernameInput: HTMLInputElement | null = document.getElementById("username") as HTMLInputElement;
    const passwordInput: HTMLInputElement | null = document.getElementById("password") as HTMLInputElement;

    if (usernameInput && passwordInput) {
      const username = usernameInput.value;
      const password = passwordInput.value;
      const loginData = { username, password };

      const response = await fetch("https://ucad.northeurope.cloudapp.azure.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "https://ucad.northeurope.cloudapp.azure.com/admin.html";
      } else {
        alert("Login failed");
      }
    }
  });
}
