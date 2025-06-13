(function() {
  // Objeto que contiene todos los datos de las tarjetas para cada sección.
  const sectionsData = {
    cp: [
      { title: "Traslados Interplantas", desc: "Registre los tiempos de atención de las unidades.", img: "Traslados.jpeg", link: "https://docs.google.com/spreadsheets/d/1KnZfYkNolj9k9X3qIyj89ebLdXGW1w7CNQ5GV7lBHJg/edit?usp=sharing" },
      { title: "Control de Film", desc: "Registre el consumo de film en los despachos.", img: "ControlFilmx.jpg", link: "https://docs.google.com/spreadsheets/d/1SfJHz2OElh5yetJ_NDWTOysi1ctVMya69_VwJ_vGvXk/edit?usp=sharing" },
      { title: "Control de Despachos", desc: "Registre el detalle de los despachos programados.", img: "Despachox.jpg", link: "#" },
      { title: "Traslados Granel", desc: "Atención de unidades cargadas con film.", img: "TrasladoGranelx.jpg", link: "#" },
      { title: "Reportes de Calidad", desc: "Bultos observados por calidad o daño.", img: "ReporteCalidadx.jpg", link: "https://docs.google.com/spreadsheets/d/1Ht-r55btoKb7YiI7kHBrX-3N_t0cKQTSpngsZUtFTV4/edit?usp=sharing" },
      { title: "Inventarios", desc: "Realiza la conciliacion de SAP vs Fisico.", img: "Exportacionx.jpg", link: "https://docs.google.com/spreadsheets/d/1SsoE1P-IZNOsW9pRPqJ0Aq-C8q58xp5o82scRU1ZlC0/edit?usp=drive_link" }
    ],
    ad: [
      { title: "Avance de Despachos", desc: "Registre el avance de despachos.", img: "Despachox.jpg", link: "#" },
      { title: "Reporte de Traslados Atendidos", desc: "Registre el número de unidades atendidas diariamente.", img: "Trasladox.jpg", link: "#" },
      { title: "Liquidaciones", desc: "Registra las liquidaciones de los despachos.", img: "Ventas.jpeg", link: "#" }
    ],
    am: [
      { title: "FEFO", desc: "Registra el movimiento de producto.", img: "Fefox.jpg", link: "https://docs.google.com/spreadsheets/d/1eagBtRYuWBIVVvvdCe8MnCB2xHDxGErIB9XImfPXO4g/edit?usp=sharing" },
      { title: "Ingreso de Productos", desc: "Agrega nuevos productos al inventario.", img: "Produccion.jpg", link: "#" }
    ],
    so: [
      { title: "Informe Diario", desc: "Registre los movimientos de productos.", img: "Informex.jpg", link: "#" },
      { title: "Ocupabilidad", desc: "Agrega nuevos productos al inventario.", img: "Ocupabilidadx.jpg", link: "#" },
      { title: "Horario", desc: "Programa el rol de turnos de tu equipo.", img: "Horariox.jpg", link: "#" }
    ],
    "reportes-generales": [
      { title: "Evolución de Ventas", desc: "Visualiza el progreso de las ventas.", img: "Ventas.jpeg", link: "#" },
      { title: "Costos de Estibaje", desc: "Visualiza los costos asociados al estibaje.", img: "Estibajex.jpg", link: "#" },
      { title: "Tiempos de Atención", desc: "Consulta los tiempos de atención de unidades.", img: "Traslados.jpeg", link: "https://lookerstudio.google.com/reporting/c65e2dde-10fe-441b-ba64-61a973faad94/page/d55wE/edit" },
      { title: "Descuentos Acumulados", desc: "Consulta los descuentos aplicados.", img: "KPI.jpg", link: "https://lookerstudio.google.com/reporting/2e533845-1568-4a8b-bc19-1bf0ccddcffa" },
      { title: "Avance de Ocupabilidad", desc: "Evalúa la ocupación del almacén.", img: "Produccion.jpg", link: "#" },
      { title: "Reporte de Lento Movimiento", desc: "Identifica productos de lento movimiento.", img: "Movimientosx.jpg", link: "#" },
      { title: "Sloting", desc: "Optimiza la ubicación de productos.", img: "Slotingx.jpg", link: "#" },
      { title: "Muestreo de Tarimas", desc: "Visualiza los resultados del muestreo de tarimas.", img: "Traslados.jpeg", link: "#" }
    ],
    birthdays: [
      { month: "Enero", name: "Luis Damián", date: "02-01", img: "cumpleanos.jpg" },
      { month: "Febrero", name: "José Loza", date: "12-02", img: "cumpleanos.jpg" },
      { month: "Febrero", name: "Juan Cossio", date: "21-02", img: "cumpleanos.jpg" },
      { month: "Marzo", name: "Fabian Laura", date: "15-03", img: "cumpleanos.jpg" },
      { month: "Marzo", name: "Alejandro Evangelista", date: "19-03", img: "cumpleanos.jpg" },
      { month: "Abril", name: "Iomar Bendezú", date: "14-04", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Jhon Gutierrez", date: "01-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Johana Yactayo", date: "19-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Carlos Barillas", date: "25-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Manuel Magallanes", date: "31-05", img: "cumpleanos.jpg" },
      { month: "Junio", name: "Julio Pachas", date: "01-06", img: "cumpleanos.jpg" },
      { month: "Junio", name: "Hugo Chavez", date: "25-06", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Florencio Vilca", date: "07-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Josemaria Chumpitaz", date: "12-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Giancarlo Nolasco", date: "15-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Luis Medina", date: "22-07", img: "cumpleanos.jpg" },
      { month: "Septiembre", name: "Miguel Pachas", date: "09-09", img: "cumpleanos.jpg" },
      { month: "Septiembre", name: "James Villanueva", date: "17-09", img: "cumpleanos.jpg" },
      { month: "Octubre", name: "Mario Magallanes", date: "18-10", img: "cumpleanos.jpg" },
      { month: "Noviembre", name: "Jesus Llanos", date: "09-11", img: "cumpleanos.jpg" },
      { month: "Diciembre", name: "Ener Cipriano", date: "12-12", img: "cumpleanos.jpg" }
    ],
    tpm: {
      "tarjetas-tpm": [
        { title: "Tarjetas Azules-Rojas", desc: "Registra anomalias o inconveniencias.", img: "TarjetaTPMx.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSdSHEobkCu9n4aH4Q-aOYkzIjhBRoM4MecYRCNKAqNFPr2CPw/viewform" },
        { title: "Tarjetas Verdes", desc: "Registra incidentes críticos que comprometan la seguridad.", img: "TarjetaVerdex.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSf5ZFf_AvHH80JRAS12x6IZPOI_HoIYQG5TC9eVCGiiHNn24w/viewform" }
      ],
      "matriz-habilidades": [
        { title: "Matriz de Habilidades", desc: "Evalúa las competencias del equipo.", img: "Matrizx.jpg", link: "https://docs.google.com/spreadsheets/d/1oD5oajklPJOj99iKKMG_vqVF6WNCxwgEr0dPqKrniz8/edit?usp=sharing" }
      ],
      "instructivos": [
        { title: "Instructivos TPM", desc: "Consulta los manuales de TPM.", img: "Manualx.jpg", link: "https://drive.google.com/drive/folders/1NgVabT7hPyVlT8XpnmQFcLTpDKCOGTBP?usp=sharing" }
      ]
    },
    // Secciones sin datos aún
    "estadisticas": [],
    "configuracion": [],
    "celebraciones": []
  };

  /**
   * Renderiza las tarjetas en una sección específica, opcionalmente filtradas por un término de búsqueda.
   * @param {string} sectionId - El ID de la sección a renderizar.
   * @param {string} [filter=''] - El texto para filtrar las tarjetas.
   * @param {string} [subsectionId=''] - El ID de una subsección (usado para TPM).
   */
  function renderCards(sectionId, filter = '', subsectionId = '') {
    const container = document.querySelector(`#${sectionId} .card-container`);
    if (!container) return;

    let cardsData = sectionsData[sectionId] || [];
    
    // Manejo de subsecciones como en TPM
    if (subsectionId && typeof cardsData === 'object' && !Array.isArray(cardsData)) {
      cardsData = cardsData[subsectionId] || [];
    }
    
    // MEJORA: Manejar secciones sin datos
    if (!cardsData || cardsData.length === 0 && sectionId !== 'birthdays') {
        const message = sectionsData[sectionId] ? 'No hay elementos para mostrar.' : 'Próximamente...';
        container.innerHTML = `<p class="coming-soon">${message}</p>`;
        return;
    }

    const filteredCards = filter 
      ? cardsData.filter(card => 
          card.title?.toLowerCase().includes(filter.toLowerCase()) || 
          card.desc?.toLowerCase().includes(filter.toLowerCase()) ||
          card.name?.toLowerCase().includes(filter.toLowerCase()) || 
          card.month?.toLowerCase().includes(filter.toLowerCase()))
      : cardsData;

    if (filteredCards.length === 0) {
      container.innerHTML = '<p class="no-results">No se encontraron resultados para tu búsqueda.</p>';
      return;
    }

    if (sectionId === 'birthdays') {
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      let html = '';
      months.forEach((month, monthIndex) => {
        const monthCards = filteredCards.filter(card => card.month === month);
        if (monthCards.length > 0) {
          html += `
            <div class="month-card" style="animation: cardFadeIn 0.5s ease forwards; animation-delay: ${monthIndex * 0.1}s;">
              <h3>${month}</h3>
              <div class="person-cards">
                ${monthCards.map((card) => {
                  const day = card.date.split('-')[0];
                  return `
                    <div class="person-card">
                      <div class="day-circle"><span>${day}</span></div>
                      <p>${card.name.toUpperCase()}</p>
                    </div>`;
                }).join('')}
              </div>
            </div>`;
        }
      });
      container.innerHTML = html || '<p class="no-results">No hay cumpleaños para mostrar.</p>';
    } else {
      container.innerHTML = filteredCards.map((card, index) => `
        <div class="card" style="animation: cardFadeIn 0.5s ease forwards; animation-delay: ${index * 0.1}s;">
          <div class="card-image-container">
            <img src="Imagenes/${card.img}" alt="${card.title}" width="250" height="150" loading="lazy">
          </div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
          <a href="${card.link}" aria-label="Ver ${card.title}" ${card.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer" onclick="showLoadingBar(event, this.href)"' : ''}>Ver Más</a>
        </div>
      `).join('');
    }
  }

  /**
   * Muestra u oculta el contenido de un menú desplegable.
   * @param {string} menuId - El ID del menú a controlar.
   */
  function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    const isActive = dropdown.classList.toggle('active');
    const btn = dropdown.previousElementSibling;
    btn.setAttribute('aria-expanded', isActive);
  }

  /**
   * Muestra una sección principal y oculta las demás.
   * @param {string} sectionId - El ID de la sección a mostrar.
   * @param {string} [subsectionId=''] - El ID de la subsección.
   */
  function showSection(sectionId, subsectionId = '') {
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.classList.add('active');
    }
    
    if (sectionId !== 'home') {
      const searchValue = document.getElementById('search-bar').value;
      renderCards(sectionId, searchValue, subsectionId);
    }

    // Actualiza el estado activo de los botones del menú
    document.querySelectorAll('.sidebar button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`button[data-section="${sectionId}"]`)?.classList.add('active');
    if(subsectionId) {
        document.querySelector(`button[data-subsection="${subsectionId}"]`)?.classList.add('active');
    }
  }

  /**
   * Muestra u oculta la barra lateral (en vista móvil).
   */
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }

  /**
   * Crea partículas animadas en el fondo (solo para pantallas grandes).
   */
  function createParticles() {
    if (window.innerWidth <= 768) return;
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      particlesContainer.appendChild(particle);
    }
  }
  
  /**
   * Cambia entre el tema oscuro y claro.
   */
  function toggleTheme() {
    const body = document.body;
    const themeButtonIcon = document.querySelector('.theme-toggle i');
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
      themeButtonIcon.classList.remove('fa-moon');
      themeButtonIcon.classList.add('fa-sun');
    } else {
      themeButtonIcon.classList.remove('fa-sun');
      themeButtonIcon.classList.add('fa-moon');
    }
  }

  /**
   * Configura el listener para la barra de búsqueda.
   */
  function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
      const activeSection = document.querySelector('.form-section.active');
      if (activeSection && activeSection.id !== 'home') {
        const subsectionId = document.querySelector('.dropdown-content li button.active')?.getAttribute('data-subsection') || '';
        renderCards(activeSection.id, searchBar.value, subsectionId);
      }
    });
  }

  /**
   * Muestra una barra de carga antes de abrir un enlace externo.
   * @param {Event} event - El evento del clic.
   * @param {string} url - La URL a abrir.
   */
  function showLoadingBar(event, url) {
    event.preventDefault(); // Previene la navegación inmediata
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.display = 'block';
    
    // Forzar un reflujo para reiniciar la animación
    loadingBar.classList.remove('active');
    void loadingBar.offsetWidth;
    loadingBar.classList.add('active');

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      loadingBar.style.display = 'none';
      loadingBar.classList.remove('active');
    }, 500);
  }

  // Se ejecuta cuando el DOM está completamente cargado.
  document.addEventListener('DOMContentLoaded', () => {
    // Inicia en el tema oscuro por defecto si no hay preferencia
    if (!document.body.classList.contains('light-theme')) {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-toggle i').classList.add('fa-sun');
    }
  
    showSection('home');
    createParticles();
    setupSearch();
  });

  // Expone las funciones al ámbito global para que puedan ser llamadas desde el HTML.
  window.toggleDropdown = toggleDropdown;
  window.showSection = showSection;
  window.toggleSidebar = toggleSidebar;
  window.toggleTheme = toggleTheme;
  window.showLoadingBar = showLoadingBar;
})();
