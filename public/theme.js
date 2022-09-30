"use strict";
const themeToggleDiv = document.querySelector(".radios");
const getThemePref = () => {
    const themePref = localStorage.getItem('theme');
    if (themePref) {
        const theme = JSON.parse(themePref);
        document.body.className = theme;
        const themeRadio = document.getElementById(theme);
        themeRadio.checked = true;
    }
};
getThemePref();
themeToggleDiv.addEventListener('change', (e) => {
    const target = e.target;
    const id = target.id;
    document.body.className = id;
    localStorage.setItem('theme', JSON.stringify(id));
});
