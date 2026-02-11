// Menu mobile toggle
const headerMenuMobile = document.querySelector('.header-menu-mobile');
const headerMenu = document.querySelector('.header-menu');

if (headerMenuMobile) {
    headerMenuMobile.addEventListener('click', function() {
        headerMenu.style.display = headerMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Fermer le menu mobile quand on clique sur un lien
const menuLinks = document.querySelectorAll('.header-menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (headerMenu) {
            headerMenu.style.display = 'none';
        }
    });
});

// Fermer le menu mobile quand on clique ailleurs
document.addEventListener('click', function(event) {
    if (!event.target.closest('header')) {
        if (headerMenu) {
            headerMenu.style.display = 'none';
        }
    }
});
