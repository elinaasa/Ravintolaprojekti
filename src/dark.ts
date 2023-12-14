function toggleDarkTheme() {
  const checkbox = document.getElementById('checkbox');

  function applyDarkTheme() {
    document.body.classList.add('dark');
    document.querySelector('table')?.classList.add('tableDark');
    document.querySelector('dialog')?.classList.add('dialogDark');
    document.querySelector('form')?.classList.add('formDark');
    document.querySelector('main')?.classList.add('mainDark');
    document.querySelector('h1')?.classList.add('h1Dark');
    document.querySelector('h2')?.classList.add('h2Dark');
    document.querySelector('h3')?.classList.add('h3Dark');
    document.querySelector('button')?.classList.add('buttonDark');
    document.querySelector('nav')?.classList.add('navDark');
    const a = document.querySelectorAll('a');
    a.forEach((element) => {
      element.classList.add('aDark');
    });
  }

  function removeDarkTheme() {
    document.body.classList.remove('dark');
    document.querySelector('table')?.classList.remove('tableDark');
    document.querySelector('dialog')?.classList.remove('dialogDark');
    document.querySelector('form')?.classList.remove('formDark');
    document.querySelector('main')?.classList.remove('mainDark');
    document.querySelector('h1')?.classList.remove('h1Dark');
    document.querySelector('h2')?.classList.remove('h2Dark');
    document.querySelector('h3')?.classList.remove('h3Dark');
    document.querySelector('button')?.classList.remove('buttonDark');
    document.querySelector('nav')?.classList.remove('navDark');
    const a = document.querySelectorAll('a');
    a.forEach((element) => {
      element.classList.remove('aDark');
    });
  }

  function saveThemeToLocalStorage(isDark) {
    localStorage.setItem('darkTheme', isDark);
  }

  checkbox?.addEventListener('change', () => {
    const isDark = (checkbox as HTMLInputElement).checked;
    if (isDark) {
      applyDarkTheme();
    } else {
      removeDarkTheme();
    }
    saveThemeToLocalStorage(isDark);
  });

  // Check if a previous theme preference exists in local storage
  const savedTheme = localStorage.getItem('darkTheme');
  if (savedTheme === 'true') {
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    checkbox.checked = true;
    applyDarkTheme();
  }
}

toggleDarkTheme();
