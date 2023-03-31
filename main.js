function darkmode() {
	const body = document.body
	const wasDarkmode = localStorage.getItem('darkmode') == 'true'

	localStorage.setItem('darkmode', !wasDarkmode)
	body.clasList.toggle('darkmode', !wasDarkmode)
}

document.querySelector('.switch').addEventListener('click', darkmode)

function onload() {
	document.body.clasList.toggle('darkmode', localStorage.getItem('darkmode') == 'true' )
}

document.addEventListener('DOMContentLoaded', onload)


const toggleSwitch = document.querySelector('input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleSwitch.checked = false;
    }
}

toggleSwitch.addEventListener('change', switchTheme);
