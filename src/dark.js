function toggleDarkTheme() {
    var checkbox = document.getElementById('checkbox');
    function applyDarkTheme() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        document.body.classList.add('dark');
        (_a = document.querySelector('table')) === null || _a === void 0 ? void 0 : _a.classList.add('tableDark');
        (_b = document.querySelector('dialog')) === null || _b === void 0 ? void 0 : _b.classList.add('dialogDark');
        (_c = document.querySelector('form')) === null || _c === void 0 ? void 0 : _c.classList.add('formDark');
        (_d = document.querySelector('main')) === null || _d === void 0 ? void 0 : _d.classList.add('mainDark');
        (_e = document.querySelector('h1')) === null || _e === void 0 ? void 0 : _e.classList.add('h1Dark');
        (_f = document.querySelector('h2')) === null || _f === void 0 ? void 0 : _f.classList.add('h2Dark');
        (_g = document.querySelector('h3')) === null || _g === void 0 ? void 0 : _g.classList.add('h3Dark');
        (_h = document.querySelector('button')) === null || _h === void 0 ? void 0 : _h.classList.add('buttonDark');
        (_j = document.querySelector('nav')) === null || _j === void 0 ? void 0 : _j.classList.add('navDark');
        var a = document.querySelectorAll('a');
        a.forEach(function (element) {
            element.classList.add('aDark');
        });
    }
    function removeDarkTheme() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        document.body.classList.remove('dark');
        (_a = document.querySelector('table')) === null || _a === void 0 ? void 0 : _a.classList.remove('tableDark');
        (_b = document.querySelector('dialog')) === null || _b === void 0 ? void 0 : _b.classList.remove('dialogDark');
        (_c = document.querySelector('form')) === null || _c === void 0 ? void 0 : _c.classList.remove('formDark');
        (_d = document.querySelector('main')) === null || _d === void 0 ? void 0 : _d.classList.remove('mainDark');
        (_e = document.querySelector('h1')) === null || _e === void 0 ? void 0 : _e.classList.remove('h1Dark');
        (_f = document.querySelector('h2')) === null || _f === void 0 ? void 0 : _f.classList.remove('h2Dark');
        (_g = document.querySelector('h3')) === null || _g === void 0 ? void 0 : _g.classList.remove('h3Dark');
        (_h = document.querySelector('button')) === null || _h === void 0 ? void 0 : _h.classList.remove('buttonDark');
        (_j = document.querySelector('nav')) === null || _j === void 0 ? void 0 : _j.classList.remove('navDark');
        var a = document.querySelectorAll('a');
        a.forEach(function (element) {
            element.classList.remove('aDark');
        });
    }
    function saveThemeToLocalStorage(isDark) {
        localStorage.setItem('darkTheme', isDark);
    }
    checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener('change', function () {
        var isDark = checkbox.checked;
        if (isDark) {
            applyDarkTheme();
        }
        else {
            removeDarkTheme();
        }
        saveThemeToLocalStorage(isDark);
    });
    // Check if a previous theme preference exists in local storage
    var savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        var checkbox_1 = document.getElementById('checkbox');
        checkbox_1.checked = true;
        applyDarkTheme();
    }
}
toggleDarkTheme();
