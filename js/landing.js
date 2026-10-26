const menuButton = document.querySelector('.nav-toggle');
const navigationMenu = document.querySelector('#menu-principal');

function closeMenu() {
    if (!menuButton || !navigationMenu) {
        return;
    }

    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigationMenu.classList.remove('is-open');
}

if (menuButton && navigationMenu) {
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isExpanded));
        menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
        navigationMenu.classList.toggle('is-open', !isExpanded);
    });

    navigationMenu.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            menuButton.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            closeMenu();
        }
    });
}

const currentYear = document.querySelector('#current-year');
if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}
