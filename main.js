import './styles/main.scss';

const langSwitcher = () => {
	const langButton = document.querySelector('.js-lang-switcher');
	const langDropdown = document.querySelector('.js-lang-dropdown');

	if (!langButton || !langDropdown) {
		return;
	}

	langButton.addEventListener('click', () => {
		if (langDropdown.classList.contains('is-open')) {
			langDropdown.setAttribute('hidden', '');
			langDropdown.classList.remove('is-open');
		} else {
			langDropdown.removeAttribute('hidden');

			setTimeout(() => {
				langDropdown.classList.add('is-open');
			});
		}
	});
};

const menuToggle = () => {
	const toggleBtn = document.querySelector('.js-menu-toggle');
	const menu = document.querySelector('.js-menu');

	if (!toggleBtn || !menu) {
		return;
	}

	toggleBtn.addEventListener('click', (e) => {
		if (toggleBtn.classList.contains('is-open')) {
			toggleBtn.classList.remove('is-open');
			menu.classList.remove('is-open');
		} else {
			toggleBtn.classList.add('is-open');
			menu.classList.add('is-open');
		}
	});
};

document.addEventListener('DOMContentLoaded', () => {
	langSwitcher();
	menuToggle();
});
