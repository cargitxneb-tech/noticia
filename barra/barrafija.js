window.addEventListener('scroll', function() {
    const menuContainer = document.getElementById('menu-container');
    const menu2Container = document.getElementById('menu2-container');
    const scrollPosition = window.scrollY;

    // Cambiar posición de #menu-container cuando la pantalla es menor o igual a 580px
    if (window.innerWidth <= 580) {
        if (scrollPosition > 55) {
            menuContainer.style.position = 'fixed';
            menuContainer.style.top = '0';
            menuContainer.style.width = '100%'; // Asegura que ocupe todo el ancho
        } else {
            menuContainer.style.position = 'relative';
            menuContainer.style.top = 'auto';
        }
    }

    // Cambiar posición de #menu2-container cuando la pantalla es mayor o igual a 900px
    if (window.innerWidth >= 900) {
        if (scrollPosition > 75) {
            menu2Container.style.position = 'fixed';
            menu2Container.style.top = '0';
            menu2Container.style.width = '100%'; // Asegura que ocupe todo el ancho
        } else {
            menu2Container.style.position = 'relative';
            menu2Container.style.top = 'auto';
        }
    }

    // Cambiar posición de #menu-container y #menu2-container cuando la pantalla está entre 600px y 850px
    if (window.innerWidth > 600 && window.innerWidth <= 850) {
        if (scrollPosition > 65) {
            menuContainer.style.position = 'fixed';
            menuContainer.style.top = '0';
            menuContainer.style.width = '100%'; // Asegura que ocupe todo el ancho
            menu2Container.style.position = 'fixed';
            menu2Container.style.top = '0';
            menu2Container.style.width = '100%'; // Asegura que ocupe todo el ancho
        } else {
            menuContainer.style.position = 'relative';
            menuContainer.style.top = 'auto';
            menu2Container.style.position = 'relative';
            menu2Container.style.top = 'auto';
        }
    }
});
