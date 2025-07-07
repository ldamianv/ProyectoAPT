
(function() {
  // Objeto que contiene todos los datos de las tarjetas para cada sección.
  const sectionsData = {
    cp: [
      { title: "Traslados Interplantas", desc: "Registre los tiempos de atención de las unidades.", img: "Traslados.jpeg", link: "https://docs.google.com/spreadsheets/d/1KnZfYkNolj9k9X3qIyj89ebLdXGW1w7CNQ5GV7lBHJg/edit?usp=sharing" },
      { title: "Control de Film", desc: "Registre el consumo de film en los despachos.", img: "ControlFilmx.jpg", link: "https://docs.google.com/spreadsheets/d/1SfJHz2OElh5yetJ_NDWTOysi1ctVMya69_VwJ_vGvXk/edit?usp=sharing" },
      { title: "Control de Despachos", desc: "Registre el detalle de los despachos programados.", img: "Despachox.jpg", link: "https://docs.google.com/spreadsheets/d/1Wi28zNueNaSyhNhU8LE4q1c-H_GpvHeEs86LXOFFYa0/edit?usp=sharing" },
      { title: "Traslados Granel", desc: "Atención de unidades cargadas con film.", img: "TrasladoGranelx.jpg", link: "#" },
      // MODIFICADO: Se cambió 'link' por 'embedUrl' para usar el modal.
      // Recuerda: esta URL es de SOLO LECTURA. Para editar, usa un link de Formulario o el link /edit de la hoja.
      { title: "Reportes de Calidad", desc: "Bultos observados por calidad o daño.", img: "ReporteCalidadx.jpg", embedUrl: "https://docs.google.com/spreadsheets/d/1Ht-r55btoKb7YiI7kHBrX-3N_t0cKQTSpngsZUtFTV4/edit?usp=sharing" },
      { title: "Inventarios", desc: "Realiza la conciliacion de SAP vs Fisico.", img: "Exportacionx.jpg", link: "https://docs.google.com/spreadsheets/d/1SsoE1P-IZNOsW9pRPqJ0Aq-C8q58xp5o82scRU1ZlC0/edit?usp=drive_link" } ,
      { title: "Descuentos", desc: "Registra los descuentos aplicados a despachos.", img: "TrasladoGranelx.jpg", link: "https://docs.google.com/spreadsheets/d/1fAl_ITZg2fnINC9X9MXoB0Ci_47NI9e2eYX-gLWKc3U/edit?usp=sharing" }
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
      ],
      "tablero-rds": [
        { title: "Indicador RDS 1",  src: "https://lookerstudio.google.com/embed/reporting/2e533845-1568-4a8b-bc19-1bf0ccddcffa/page/sLkNF" },
        { title: "Indicador RDS 2",  src: "https://lookerstudio.google.com/embed/reporting/5ecb2b09-f66b-47e5-947d-dd17fe97a4a5/page/LXtOF" },
        { title: "Indicador RDS 3",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_3" },
        { title: "Indicador RDS 4",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_4" },
        { title: "Indicador RDS 5",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_5" },
        { title: "Indicador RDS 6",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_6" },
        { title: "Indicador RDS 7",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_7" },
        { title: "Indicador RDS 8",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_8" },
        { title: "Indicador RDS 9",  src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_9" },
        { title: "Indicador RDS 10", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_10" },
        { title: "Indicador RDS 11", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_11" },
        { title: "Indicador RDS 12", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_12" },
        { title: "Indicador RDS 13", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_13" },
        { title: "Indicador RDS 14", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_14" },
        { title: "Indicador RDS 15", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_15" },
        { title: "Indicador RDS 16", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_16" },
        { title: "Indicador RDS 17", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_17" },
        { title: "Indicador RDS 18", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_18" },
        { title: "Indicador RDS 19", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_19" },
        { title: "Indicador RDS 20", src: "AQUÍ_VA_TU_ENLACE_DEL_GRAFICO_20" }
      ],
    },
    "nuestra-gente": [
      { month: "Enero", name: "Luis Damián", date: "02-01" },
      { month: "Febrero", name: "José Loza", date: "12-02" },
      { month: "Febrero", name: "Juan Cossio", date: "21-02" },
      { month: "Marzo", name: "Fabian Laura", date: "15-03" },
      { month: "Marzo", name: "Alejandro Evangelista", date: "19-03" },
      { month: "Abril", name: "Iomar Bendezú", date: "14-04" },
      { month: "Mayo", name: "Jhon Gutierrez", date: "01-05" },
      { month: "Mayo", name: "Johana Yactayo", date: "19-05" },
      { month: "Mayo", name: "Carlos Barillas", date: "25-05" },
      { month: "Mayo", name: "Manuel Magallanes", date: "31-05" },
      { month: "Junio", name: "Julio Pachas", date: "01-06" },
      { month: "Junio", name: "Hugo Chavez", date: "25-06" },
      { month: "Julio", name: "Florencio Vilca", date: "07-07" },
      { month: "Julio", name: "Josemaria Chumpitaz", date: "12-07" },
      { month: "Julio", name: "Giancarlo Nolasco", date: "15-07" },
      { month: "Julio", name: "Luis Medina", date: "22-07" },
      { month: "Septiembre", name: "Miguel Pachas", date: "09-09" },
      { month: "Septiembre", name: "James Villanueva", date: "17-09" },
      { month: "Octubre", name: "Mario Magallanes", date: "18-10" },
      { month: "Noviembre", name: "Jesus Llanos", date: "09-11" },
      { month: "Diciembre", name: "Ener Cipriano", date: "12-12" }
    ],
    "estadisticas": [],
    "configuracion": [],
    "celebraciones": []
  };

function openEmbedModal(url) {
  const modal = document.getElementById('embed-modal');
  const iframe = document.getElementById('embed-iframe');
  const loader = modal.querySelector('.loader');

  if (modal && iframe && loader) {
    loader.style.display = 'block'; // Muestra el loader
    iframe.src = url;
    modal.classList.add('visible');

    // Oculta el loader cuando el iframe haya cargado
    iframe.onload = function() {
      loader.style.display = 'none';
    };
  }
}

function closeEmbedModal() {
  const modal = document.getElementById('embed-modal');
  const iframe = document.getElementById('embed-iframe');
  const loader = modal.querySelector('.loader');

  if (modal && iframe && loader) {
    modal.classList.remove('visible');
    setTimeout(() => {
      iframe.src = '';
      iframe.onload = null; // Limpia el evento onload
      loader.style.display = 'block'; // Restablece el loader para la próxima vez
    }, 400);
  }
}

  /**
   * Renderiza el contenido de una sección.
   */
  function renderCards(sectionId, filter = '', subsectionId = '') {
    const container = document.querySelector(`#${sectionId} .card-container`);
    if (!container) return;

    let dataToShow = sectionsData[sectionId] || [];
    
    if (subsectionId && typeof dataToShow === 'object' && !Array.isArray(dataToShow)) {
      dataToShow = dataToShow[subsectionId] || [];
    }
    
    const titleElement = document.querySelector(`#${sectionId} h1`);
    if (titleElement) {
        if (subsectionId) {
            const subMenuButton = document.querySelector(`button[data-subsection="${subsectionId}"]`);
            titleElement.textContent = subMenuButton ? subMenuButton.textContent.trim() : "Detalles";
        } else {
            const mainMenuButton = document.querySelector(`.sidebar button[data-section="${sectionId}"]`);
            titleElement.textContent = mainMenuButton ? mainMenuButton.textContent.replace(/<i.*i>/, '').replace(/<.*>/, '').trim() : "Sección";
        }
    }

    if (!dataToShow || dataToShow.length === 0 && sectionId !== 'nuestra-gente') {
        const message = sectionsData[sectionId] ? 'No hay elementos para mostrar.' : 'Próximamente...';
        container.innerHTML = `<p class="coming-soon">${message}</p>`;
        return;
    }

    const filteredData = filter 
      ? dataToShow.filter(item => 
          item.title?.toLowerCase().includes(filter.toLowerCase()) || 
          item.desc?.toLowerCase().includes(filter.toLowerCase()) ||
          item.name?.toLowerCase().includes(filter.toLowerCase()) || 
          item.month?.toLowerCase().includes(filter.toLowerCase()))
      : dataToShow;

    if (filteredData.length === 0) {
      container.innerHTML = '<p class="no-results">No se encontraron resultados para tu búsqueda.</p>';
      return;
    }
    
    if (subsectionId === 'tablero-rds') {
      container.innerHTML = `
        <div class="dashboard-grid">
          ${filteredData.map(item => `
            <div class="dashboard-item">
              <h3>${item.title}</h3>
              <div class="iframe-container">
                <iframe src="${item.src}" loading="lazy" allowfullscreen></iframe>
              </div>
            </div>
          `).join('')}
        </div>`;
      return;
    }

    if (sectionId === 'nuestra-gente') {
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      let html = '';
      months.forEach((month, monthIndex) => {
        const monthCards = filteredData.filter(card => card.month === month);
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
      // MODIFICADO: Bloque completo para renderizar tarjetas con lógica de modal.
      container.innerHTML = filteredData.map((card, index) => {
        // Decide qué tipo de botón o enlace crear para cada tarjeta
        const buttonHtml = card.embedUrl
            // Si la tarjeta tiene 'embedUrl', crea un BOTÓN que abre el modal
            ? `<button class="card-button" onclick="openEmbedModal('${card.embedUrl}')" aria-label="Ver ${card.title}">Ver Reporte</button>`
            // Si no, crea un ENLACE tradicional. Se incluye la corrección del bug.
            : `<a href="${card.link}" class="card-button" aria-label="Ver ${card.title}" ${
                card.link && card.link.startsWith('http') 
                ? 'target="_blank" rel="noopener noreferrer" onclick="showLoadingBar(event, this.href)"' 
                : ''
              }>Abrir Reporte</a>`;

        // Construye el HTML de la tarjeta usando la variable buttonHtml
        return `
            <div class="card" style="animation: cardFadeIn 0.5s ease forwards; animation-delay: ${index * 0.1}s;">
                <div class="card-image-container">
                    <img src="Imagenes/${card.img}" alt="${card.title}" width="250" height="150" loading="lazy">
                </div>
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <div class="card-button-container">
                    ${buttonHtml}
                </div>
            </div>
        `;
      }).join('');
    }
  }

  function toggleDropdown(menuId) {
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if(menu.id !== menuId) {
            menu.classList.remove('active');
            menu.previousElementSibling.setAttribute('aria-expanded', 'false');
        }
    });
    const dropdown = document.getElementById(menuId);
    const isActive = dropdown.classList.toggle('active');
    dropdown.previousElementSibling.setAttribute('aria-expanded', isActive);
  }

  function showSection(sectionId, subsectionId = '') {
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.classList.add('active');
    }
    
    const searchBar = document.getElementById('search-bar');
    if (sectionId !== 'home') {
      renderCards(sectionId, searchBar.value, subsectionId);
    } else {
      searchBar.value = '';
      document.querySelector('#home h1').textContent = "Bienvenidos a APT Cañete - Supply Chain";
    }

    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }

    document.querySelectorAll('.sidebar button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const buttonToActivate = subsectionId 
        ? document.querySelector(`button[data-subsection="${subsectionId}"]`)
        : document.querySelector(`button[data-section="${sectionId}"]`);

    if(buttonToActivate) {
        buttonToActivate.classList.add('active');
        const parentMenu = buttonToActivate.closest('.dropdown-content');
        if(parentMenu) {
            parentMenu.previousElementSibling.classList.add('active');
        }
    }
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }

  function createParticles() {
    if (window.innerWidth <= 768) return;
    const particlesContainer = document.querySelector('.particles');
    if(particlesContainer.children.length > 0) return;
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

  function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
      const activeSectionEl = document.querySelector('.form-section.active');
      if (activeSectionEl && activeSectionEl.id) {
          const activeSectionId = activeSectionEl.id;
          const activeSubSectionButton = document.querySelector(`.sidebar button.active[data-subsection]`);
          const subSectionId = activeSubSectionButton ? activeSubSectionButton.dataset.subsection : '';
          renderCards(activeSectionId, searchBar.value, subSectionId);
      }
    });
  }

  function showLoadingBar(event, url) {
    event.preventDefault();
    const loadingBarContainer = document.getElementById('loading-bar');
    const loadingBar = loadingBarContainer.querySelector('.loading-progress');
    
    loadingBarContainer.style.display = 'block';
    
    loadingBar.style.width = '0%';
    void loadingBar.offsetWidth;
    loadingBar.style.width = '100%';

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      loadingBarContainer.style.display = 'none';
      loadingBar.style.width = '0%';
    }, 500);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.classList.contains('light-theme')) {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-toggle i').classList.add('fa-sun');
    }
  
    showSection('home');
    //createParticles();
    setupSearch();
  });

  // AÑADIDO: Event listener para cerrar el modal al hacer clic fuera de él.
  window.onclick = function(event) {
    const modal = document.getElementById('embed-modal');
    if (event.target == modal) {
        closeEmbedModal();
    }
  }

  // AÑADIDO: Hacer las funciones accesibles globalmente desde el HTML.
  window.toggleDropdown = toggleDropdown;
  window.showSection = showSection;
  window.toggleSidebar = toggleSidebar;
  window.toggleTheme = toggleTheme;
  window.showLoadingBar = showLoadingBar;
  window.openEmbedModal = openEmbedModal;
  window.closeEmbedModal = closeEmbedModal;
})();
// AÑADIDO: Cerrar el modal con la tecla Escape
window.addEventListener('keydown', function (event) {
  const modal = document.getElementById('embed-modal');
  if (event.key === 'Escape' && modal.classList.contains('visible')) {
    closeEmbedModal();
  }
});
