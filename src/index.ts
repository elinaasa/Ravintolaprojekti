import {restaurantModal} from './components';
import {fetchData} from './functions';
import {LoginUser, User} from './interfaces/User';
import { DailyMenu, WeeklyMenu } from './interfaces/Menu';
import {apiUrl, uploadUrl, positionOptions} from './variables';

const modal = document.querySelector('dialog');
if (!modal) {
  throw new Error('Modal not found');
}
modal.addEventListener('click', () => {
  modal.close();
});

const createTable = (restaurants: Restaurants, menuDate: boolean = true) => {
  const table = document.querySelector('table');
  if (!table) return;
  table.innerHTML = '';
  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);
    table.appendChild(tr);
    tr.addEventListener('click', async () => {
      try {
        // remove all highlights
        const allHighs = document.querySelectorAll('.highlight');
        allHighs.forEach((high) => {
          high.classList.remove('highlight');
        });
        // add highlight
        tr.classList.add('highlight');
        // add restaurant data to modal
        modal.innerHTML = '';

        // fetch menu
        const menu = await fetchData<DailyMenu>(
          apiUrl + `/restaurants/daily/${restaurant._id}/fi`
        );
        console.log(menu);

        // fetch weekly menu
        const weeklyMenu = await fetchData<WeeklyMenu>(
          apiUrl + `/restaurants/weekly/${restaurant._id}/fi`
        );

        if (menuDate) {
          const menuHtml = restaurantModal(restaurant, menu);
          modal.insertAdjacentHTML('beforeend', menuHtml);
        } else {
          const menuHtml = restaurantModal(restaurant, weeklyMenu);
          modal.insertAdjacentHTML('beforeend', menuHtml);
        }
        modal.showModal();
      } catch (error) {
        modal.innerHTML = errorModal((error as Error).message);
        modal.showModal();
      }
    });
  });
};
    createTable(restaurants);



navigator.geolocation.getCurrentPosition(success, error, positionOptions);

// select forms from the DOM

const loginForm = document.querySelector('#login-form');
const profileForm = document.querySelector('#profile-form');
const avatarForm = document.querySelector('#avatar-form');

// select inputs from the DOM

const usernameInput = document.querySelector('#username') as HTMLInputElement | null;
const passwordInput = document.querySelector('#password') as HTMLInputElement | null;
const profileUsernameInput = document.querySelector(
  '#profile-username'
) as HTMLInputElement | null;
const profileEmailInput = document.querySelector(
  '#profile-email'
) as HTMLInputElement | null;
const avatarInput = document.querySelector('#avatar') as HTMLInputElement | null;

// select profile elements from the DOM

const usernameTarget = document.querySelector('#username-target');
const emailTarget = document.querySelector('#email-target');
const avatarTarget = document.querySelector('#avatar-target');

// function to login

const login = async (user: {username: string, password: string}): Promise<LoginUser> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return await fetchData<LoginUser>(apiUrl + '/auth/login', options);
};

// function to add userdata (email, username and avatar image) to the
// Profile DOM and Edit Profile Form

const addUserDataToDom = (user: User): void => {
  if (!usernameTarget || !emailTarget || !profileEmailInput || !profileUsernameInput) {
    return;
  }
  usernameTarget.innerHTML = user.username;
  emailTarget.innerHTML = user.email;
  (avatarTarget as HTMLImageElement).src = uploadUrl;
  profileEmailInput.value = user.email;
  profileUsernameInput.value = user.username;
};

// function to get userdata from API using token

const getUserData = async (token: string): Promise<User> => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetchData<User>(apiUrl + '/users/token', options);
};

// function to check local storage for token and if it exists fetch
// userdata with getUserData then update the DOM with addUserDataToDom

const checkToken = async (): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const userData = await getUserData(token);
  addUserDataToDom(userData);
};

// call checkToken on page load to check if token exists and update the DOM

checkToken();

// login form event listener
// event listener should call login function and save token to local storage
// then call addUserDataToDom to update the DOM with the user data

loginForm?.addEventListener('submit', async (evt)=>{
  evt.preventDefault();
  if (!usernameInput || !passwordInput) {
    return;
  }
  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
  };
  const loginData = await login(user);
  console.log(loginData);
  localStorage.setItem('token', loginData.token);
  addUserDataToDom(loginData.data);
});

// profile form event listener
// event listener should call updateUserData function and update the DOM with
// the user data by calling addUserDataToDom or checkToken

profileForm?.addEventListener('submit', async (evt)=>{
  evt.preventDefault();
  if (!profileEmailInput || !profileUsernameInput) {
    return;
  }
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const user = {
    email: profileEmailInput.value,
    username: profileUsernameInput.value,
  };
  const updateData = await updateUserData(user, token);
  console.log(updateData);
  checkToken();
});

// avatar form event listener
// event listener should call uploadAvatar function and update the DOM with
// the user data by calling addUserDataToDom or checkToken

avatarForm?.addEventListener('submit', async (evt)=>{
  evt.preventDefault();
  if (!avatarInput?.files) {
    return;
  }
  const image = avatarInput.files[0];
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  const avatarData = await uploadAvatar(image, token);
  console.log(avatarData);
  checkToken();
});

// dark theme
// queryselector for table element which is inside dialog element
// queryselector for div element with class form-container

const checkbox = document.getElementById("checkbox")
checkbox?.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  document.querySelector("table")?.classList.toggle("tableDark")
  document.querySelector("dialog")?.classList.toggle("dialogDark")
  document.querySelector("form")?.classList.toggle("formDark")
  document.querySelector("main")?.classList.toggle("mainDark")
})

// add id to form-container section element when checkbox is checked
const checkboxId = document.getElementById("checkbox") as HTMLInputElement;
const formContainer = document.querySelector("section.form-container");

checkboxId?.addEventListener("change", () => {
  if (checkboxId.checked) {
    if (formContainer) {
      formContainer.id = "form-container";
    }
  } else {
    if (formContainer) {
      formContainer.removeAttribute("id");
    }
  }
});
