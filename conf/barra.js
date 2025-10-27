// Inyectar el widget CNEBX dinámicamente
fetch('/conf/barra.html')
  .then(response => response.text())
  .then(html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    // Cargar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'cnebx.css';
    document.head.appendChild(link);

    // Esperar a que el DOM se actualice antes de ejecutar el resto
    setTimeout(() => iniciarCNEBX(), 100);
  })
  .catch(err => console.error('Error al cargar el widget CNEBX:', err));

// ---- Funciones principales del widget ----
function iniciarCNEBX() {
  const cnebxBtn = document.getElementById('cnebx-hambtn');
  const cnebxPanel = document.getElementById('cnebx-panel');
  const cnebxOverlay = document.getElementById('cnebx-overlay');
  const cnebxTopbar = document.getElementById('cnebx-topbar');
  const cnebxCarousel = document.getElementById('cnebx-carousel');

  if (!cnebxBtn || !cnebxPanel) return;

  // Botón menú
  cnebxBtn.addEventListener('click', () => {
    const abierto = cnebxPanel.classList.toggle('open');
    cnebxOverlay.classList.toggle('show', abierto);
    cnebxBtn.classList.toggle('open', abierto);
    cnebxBtn.setAttribute('aria-expanded', abierto);
  });

  cnebxOverlay.addEventListener('click', () => {
    cnebxPanel.classList.remove('open');
    cnebxOverlay.classList.remove('show');
    cnebxBtn.classList.remove('open');
    cnebxBtn.setAttribute('aria-expanded', false);
  });

  // Acordeón
  document.querySelectorAll('#cnebx-widget .cnebx-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');
      header.classList.toggle('open', !isOpen);
      content.classList.toggle('open', !isOpen);
    });
  });

  // Fijar barra + carrusel + panel según scroll
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    let limite = 70;

    if (window.innerWidth <= 768) limite = 55;
    else if (window.innerWidth <= 1200) limite = 60;

    if (y > limite) {
      cnebxTopbar.classList.add('fixed');
      cnebxCarousel.classList.add('fixed');
      cnebxPanel.classList.add('fixed');
    } else {
      cnebxTopbar.classList.remove('fixed');
      cnebxCarousel.classList.remove('fixed');
      cnebxPanel.classList.remove('fixed');
    }
  });
}
