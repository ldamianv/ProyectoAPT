(function() {
  const sectionsData = {
    cp: [
      { title: "Traslados Interplantas", desc: "Registre los tiempos de atención de las unidades.", img: "Traslados.jpeg", link: "https://docs.google.com/spreadsheets/d/1mnXtHfsSCU5d9nxdB6oosuiX6xkXXoanOVH3no43-YA/edit?usp=sharing" },
      { title: "Control de Film", desc: "Registre el consumo de film en los despachos.", img: "Produccion.jpg", link: "#" },
      { title: "Control de Despachos", desc: "Registre el detalle de los despachos programados.", img: "Ventas.jpeg", link: "#" },
      { title: "Traslados Granel", desc: "Atención de unidades cargadas con film.", img: "Movimientos.jpeg", link: "#" },
      { title: "Reportes de Calidad", desc: "Bultos observados por calidad o daño.", img: "Reporte.jpeg", link: "#" },
      { title: "Exportaciones", desc: "Registra las atenciones de exportaciones.", img: "KPI.jpg", link: "#" }
    ],
    ad: [
      { title: "Avance de Despachos", desc: "Consulta los traslados entre plantas.", img: "Traslados.jpeg", link: "#" },
      { title: "Reporte de Traslados Atendidos", desc: "Registre el número de unidades atendidas diariamente.", img: "Produccion.jpg", link: "#" },
      { title: "Liquidaciones", desc: "Registra las liquidaciones de los despachos.", img: "Ventas.jpeg", link: "#" }
    ],
    am: [
      { title: "FEFO", desc: "Registre los movimientos de productos.", img: "Traslados.jpeg", link: "#" },
      { title: "Ingreso de Productos", desc: "Agrega nuevos productos al inventario.", img: "Produccion.jpg", link: "#" }
    ],
    so: [
      { title: "Informe Diario", desc: "Registre los movimientos de productos.", img: "Traslados.jpeg", link: "#" },
      { title: "Ocupabilidad", desc: "Agrega nuevos productos al inventario.", img: "Produccion.jpg", link: "#" }
    ],
    "reportes-generales": [
      { title: "Evolución de Ventas", desc: "Visualiza el progreso de las ventas.", img: "Ventas.jpeg", link: "#" },
      { title: "Costos de Estibaje", desc: "Registra los costos asociados al estibaje.", img: "Reporte.jpeg", link: "#" },
      { title: "Tiempos de Atención", desc: "Mide los tiempos de atención de unidades.", img: "Traslados.jpeg", link: "#" },
      { title: "Descuentos Acumulados", desc: "Consulta los descuentos aplicados.", img: "KPI.jpg", link: "#" },
      { title: "Avance de Ocupabilidad", desc: "Evalúa la ocupación del almacén.", img: "Produccion.jpg", link: "#" },
      { title: "Reporte de Lento Movimiento", desc: "Identifica productos de lento movimiento.", img: "Movimientos.jpeg", link: "#" },
      { title: "Sloting", desc: "Optimiza la ubicación de productos.", img: "Reporte.jpeg", link: "#" },
      { title: "Muestreo de Tarimas", desc: "Registra muestras de tarimas.", img: "Traslados.jpeg", link: "#" }
    ]
  };

  function renderCards(sectionId, filter = '') {
    const container = document.querySelector(`#${sectionId} .card-container`);
    const cards = sectionsData[sectionId] || [];
    const filteredCards = filter 
      ? cards.filter(card => 
          card.title.toLowerCase().includes(filter.toLowerCase()) || 
          card.desc.toLowerCase().includes(filter.toLowerCase()))
      : cards;
    
    container.innerHTML = filteredCards.length === 0 
      ? '<p style="text-align: center; color: var(--text);">No se encontraron resultados.</p>'
      : filteredCards.map(card => `
        <div class="card" role="article" aria-label="${card.title}" style="animation: cardFadeIn 0.5s ease forwards;">
          <div class="card-image-container">
            <img src="/ProyectoAPT/Imagenes/${card.img}" alt="${card.title}" width="250" height="150" loading="lazy">
          </div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
          ${card.title === 'Traslados Interplantas' && sectionId === 'cp' 
            ? `<a href="#" onclick="openTrasladosModal(); return false;">Registrar</a>` 
            : `<a href="${card.link}" ${card.link.startsWith('http') ? 'target="_blank"' : ''}>${card.link.startsWith('http') ? 'Ver Más' : 'Registrar'}</a>`}
        </div>
      `).join('');

    const cardElements = container.querySelectorAll('.card');
    cardElements.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    dropdown.classList.toggle('active');
    const btn = dropdown.previousElementSibling;
    btn.setAttribute('aria-expanded', dropdown.classList.contains('active'));
  }

  function showSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    const searchValue = document.getElementById('search-bar').value;
    renderCards(sectionId, searchValue);

    document.querySelectorAll('.dropdown-content li button').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-section') === sectionId) {
        btn.classList.add('active');
      }
    });

    if (window.innerWidth <= 768) {
      toggleSidebar(); // Cierra el sidebar al seleccionar en móviles
    }
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    sidebar.classList.toggle('active');
    container.classList.toggle('sidebar-active');

    if (window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown-content.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        dropdown.previousElementSibling.setAttribute('aria-expanded', 'false');
      });
    }
  }

  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.animationDuration = Math.random() * 5 + 5 + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle i');
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeButton.classList.remove('fa-sun');
      themeButton.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeButton.classList.remove('fa-moon');
      themeButton.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  }

  function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
      const activeSection = document.querySelector('.form-section.active');
      if (activeSection) {
        renderCards(activeSection.id, searchBar.value);
      }
    });
  }

  function openTrasladosModal() {
    document.getElementById('trasladosModal').style.display = 'flex';
    document.getElementById('trasladosForm').onsubmit = function(e) {
      e.preventDefault();
      saveTrasladosReport();
    };
  }

  function closeTrasladosModal() {
    document.getElementById('trasladosModal').style.display = 'none';
  }

  function saveTrasladosReport() {
    const date = document.getElementById('trasladosDate').value;
    const report = document.getElementById('trasladosReport').value;
    const responsible = document.getElementById('trasladosResponsible').value;
    if (!date || !report || !responsible) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }
    const data = {
      date,
      report,
      responsible,
      details: document.getElementById('trasladosDetails').value
    };
    fetch('https://script.google.com/a/macros/softys.com/s/AKfycbwwD52B9UjSUvo06j-v1MDp1vIrISOBfbv5D1sitpVjSgyPE8SIuxZ-V3feq-gjudY42g/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
      const modalContent = document.querySelector('#trasladosModal .modal-content');
      modalContent.insertAdjacentHTML('beforeend', `<p style="color: var(--primary);">${result}</p>`);
      setTimeout(closeTrasladosModal, 2000);
    })
    .catch(error => console.error('Error saving report:', error));
  }

  window.onclick = function(event) {
    const modal = document.getElementById('trasladosModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') toggleTheme();
    renderCards('cp');
    createParticles();
    document.querySelector('button[data-section="cp"]').classList.add('active');
    setupSearch();
  });

  window.toggleDropdown = toggleDropdown;
  window.showSection = showSection;
  window.toggleSidebar = toggleSidebar;
  window.toggleTheme = toggleTheme;
  window.openTrasladosModal = openTrasladosModal;
  window.closeTrasladosModal = closeTrasladosModal;
  window.saveTrasladosReport = saveTrasladosReport;
})();
